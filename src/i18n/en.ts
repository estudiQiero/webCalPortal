import type ca from './ca';

const en: typeof ca = {
  nav: {
    home: 'Home',
    rooms: 'Rooms',
    house: 'The house',
    activities: 'Activities',
    gallery: 'Gallery',
    contact: 'Contact',
    book: 'Book',
  },
  site: {
    title: 'Cal Portal — Rural stay in Torrefeta, La Segarra',
    tagline: 'Come enjoy nature in Torrefeta, Lleida',
  },
  hero: {
    welcome: 'Welcome',
    toHouse: 'to our',
    houseWord: 'village house',
    titleHtml:
      '<span class="word-trigger" data-panel="lang">Welcome</span> to <span class="word-trigger" data-panel="about">our</span> <em><span class="glyph3">v</span>illage hous<span class="glyph2">e</span></em>',
    subtitle: 'Come enjoy nature in Torrefeta, Lleida',
    subtitleHtml: 'Come enjoy nature in <span class="word-trigger" data-panel="location">Torrefeta</span>, Lleida',
    ctaBook: 'Check availability',
    ctaRooms: 'See rooms',
    langPanelTitle: 'Choose language',
  },
  welcomeModal: {
    title: 'Welcome',
    text: 'Cal Portal is a village house in Torrefeta i Florejacs, in the heart of La Segarra. Three rooms meant to be shared, surrounded by fields, open sky and plenty of calm.',
  },
  aboutModal: {
    title: 'Who we are',
    names: ['Josefina', 'Miquel'],
    text: 'We are Josefina and Miquel. We open the doors of our home so you can find what we find here ourselves: slower time and a real village.',
  },
  location: {
    title: 'Where we are',
    text: 'Torrefeta i Florejacs, in the heart of La Segarra, Lleida — open fields and Florejacs Castle a few minutes’ walk away.',
    openInMaps: 'Open in Google Maps',
  },
  weather: {
    title: 'Weather in Torrefeta right now',
    loading: 'Checking the sky...',
    error: 'We couldn’t check the weather. Please try again later.',
    feelsLike: 'Feels like',
    wind: 'Wind',
    humidity: 'Humidity',
    updated: 'Updated',
  },
  rooms: {
    title: 'The rooms',
    intro: 'Three rooms, each with its own character, made for resting after a day outdoors.',
    list: [
      { name: 'Portal Room', desc: 'The sunniest room in the house, with open views over the fields of La Segarra.', capacity: '2 guests' },
      { name: 'Era Room', desc: 'Warm and quiet, ideal for those looking to fully unplug.', capacity: '2-3 guests' },
      { name: 'Celler Room', desc: 'The coziest one, with the house’s original stone walls.', capacity: '2 guests' },
    ],
  },
  house: {
    title: 'The house',
    body: 'Cal Portal is a century-old village house in Torrefeta i Florejacs, carefully restored to keep its character. Shared spaces, a kitchen available to guests, and a porch to sit and watch the sky of La Segarra, one of the areas with the least light pollution in Catalonia.',
  },
  activities: {
    title: 'Activities in La Segarra',
    intro: 'Torrefeta i Florejacs and the surrounding villages invite you to walk, cycle and stargaze.',
    list: [
      { name: 'Hiking trails', desc: 'Paths through cereal fields and small medieval villages.' },
      { name: 'Stargazing', desc: 'La Segarra is one of the areas with the best night skies in Catalonia.' },
      { name: 'Florejacs Castle', desc: 'A medieval castle just a few minutes’ walk from the house.' },
      { name: 'Cycling routes', desc: 'Quiet tracks and roads to explore the region at your own pace.' },
    ],
  },
  gallery: {
    title: 'Gallery',
  },
  contact: {
    title: 'Contact',
    intro: 'Write to us with any questions, or if you’d like to book directly with us.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    success: 'Thank you! We’ve received your message and will reply as soon as possible.',
  },
  booking: {
    title: 'Availability & booking',
    intro: 'This calendar shows combined availability from Airbnb and Booking. If the dates work for you, send us a request and we’ll confirm it by email.',
    legendBusy: 'Booked',
    legendFree: 'Available',
    loading: 'Loading availability...',
    error: 'We couldn’t load the calendar right now. Please contact us directly.',
    formTitle: 'Booking request',
    room: 'Room',
    anyRoom: 'Any / to be decided',
    checkin: 'Check-in date',
    checkout: 'Check-out date',
    guests: 'Number of guests',
    requestBtn: 'Send request',
    note: 'This request is not a confirmed booking; we’ll contact you to confirm it.',
    success: 'Request sent! We’ll confirm your booking by email as soon as possible.',
  },
  footer: {
    address: 'Torrefeta i Florejacs, La Segarra, Lleida',
    rights: 'All rights reserved.',
  },
};

export default en;
