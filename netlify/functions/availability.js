// Merges availability from Airbnb + Booking.com iCal feeds so the site can
// show a combined "busy" calendar without a paid channel manager.
//
// Configure the feeds via the ICAL_FEEDS environment variable in Netlify
// (Site settings > Environment variables), as a JSON array, e.g.:
//
// [
//   {"room":"portal","source":"airbnb","url":"https://www.airbnb.com/calendar/ical/XXXX.ics"},
//   {"room":"portal","source":"booking","url":"https://admin.booking.com/.../ical"},
//   {"room":"era","source":"airbnb","url":"..."},
//   {"room":"celler","source":"airbnb","url":"..."}
// ]
//
// If a room-level calendar isn't available (e.g. Airbnb/Booking only expose
// one calendar for the whole house), use "general" as the room value — the
// front end treats "general" as busy for every room.

const ical = require('node-ical');

exports.handler = async function () {
  let feeds = [];
  try {
    feeds = JSON.parse(process.env.ICAL_FEEDS || '[]');
  } catch (err) {
    feeds = [];
  }

  if (!Array.isArray(feeds) || feeds.length === 0) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=900',
      },
      body: JSON.stringify({ configured: false, busy: [] }),
    };
  }

  const busy = [];

  await Promise.all(
    feeds.map(async (feed) => {
      if (!feed || !feed.url) return;
      try {
        const data = await ical.async.fromURL(feed.url);
        for (const key of Object.keys(data)) {
          const ev = data[key];
          if (ev.type === 'VEVENT' && ev.start && ev.end) {
            busy.push({
              room: feed.room || 'general',
              source: feed.source || 'unknown',
              start: toDateStr(ev.start),
              end: toDateStr(ev.end),
            });
          }
        }
      } catch (err) {
        // A single broken/unreachable feed shouldn't take down the whole
        // calendar — just skip it.
        console.error(`availability: failed to load feed ${feed.url}`, err.message);
      }
    })
  );

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=900',
    },
    body: JSON.stringify({ configured: true, busy }),
  };
};

function toDateStr(date) {
  // Airbnb/Booking iCal events are all-day (VALUE=DATE). node-ical parses
  // those as local midnight, so we read the local calendar fields instead
  // of toISOString() — otherwise the date shifts by one day whenever the
  // function runs in a timezone behind UTC.
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
