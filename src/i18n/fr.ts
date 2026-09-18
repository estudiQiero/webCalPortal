import type ca from './ca';

const fr: typeof ca = {
  nav: {
    home: 'Accueil',
    rooms: 'Chambres',
    house: 'La maison',
    activities: 'Activités',
    gallery: 'Galerie',
    contact: 'Contact',
    book: 'Réserver',
  },
  site: {
    title: 'Cal Portal — Gîte rural à Torrefeta, La Segarra',
    tagline: 'Venez profiter de la nature à Torrefeta, Lleida',
  },
  hero: {
    welcome: 'Bienvenus',
    toHouse: 'dans notre',
    houseWord: 'maison de village',
    titleHtml:
      '<span class="word-trigger" data-panel="lang">Bien<span class="glyph3">v</span>enus</span> dans <span class="word-trigger" data-panel="about"><span class="glyph3">n</span>otre</span> maison de villag<span class="glyph2">e</span>',
    subtitle: 'Venez profiter de la nature à Torrefeta, Lleida',
    subtitleHtml: 'Venez profiter de la nature à <span class="word-trigger" data-panel="location">Torrefeta</span>, Lleida',
    ctaBook: 'Voir les disponibilités',
    ctaRooms: 'Voir les chambres',
    langPanelTitle: 'Choisissez la langue',
  },
  welcomeModal: {
    title: 'Bienvenus',
    text: 'Cal Portal est une maison de village à Torrefeta i Florejacs, au cœur de La Segarra. Trois chambres pensées pour être partagées, entourées de champs, de ciel ouvert et de calme.',
  },
  aboutModal: {
    title: 'Qui sommes-nous',
    names: ['Josefina', 'Miquel'],
    text: 'Nous sommes Josefina et Miquel. Nous ouvrons les portes de notre maison pour que vous y trouviez ce que nous y trouvons nous-mêmes : du temps qui ralentit et un vrai village.',
  },
  location: {
    title: 'Où nous sommes',
    text: 'Torrefeta i Florejacs, au cœur de La Segarra, Lleida — champs ouverts et le château de Florejacs à quelques minutes à pied.',
    openInMaps: 'Ouvrir dans Google Maps',
  },
  weather: {
    title: 'La météo à Torrefeta en ce moment',
    loading: 'Consultation du ciel...',
    error: 'Impossible de consulter la météo. Réessayez plus tard.',
    feelsLike: 'Ressenti',
    wind: 'Vent',
    humidity: 'Humidité',
    updated: 'Mis à jour',
  },
  rooms: {
    title: 'Les chambres',
    intro: 'Trois chambres, chacune avec son caractère, pensées pour se reposer après une journée au grand air.',
    list: [
      { name: 'Chambre du Portal', desc: 'La plus ensoleillée de la maison, avec vue ouverte sur les champs de La Segarra.', capacity: '2 personnes' },
      { name: 'Chambre de l’Era', desc: 'Chaleureuse et tranquille, idéale pour se déconnecter complètement.', capacity: '2-3 personnes' },
      { name: 'Chambre du Celler', desc: 'La plus intime, avec les murs de pierre d’origine de la maison.', capacity: '2 personnes' },
    ],
  },
  house: {
    title: 'La maison',
    body: 'Cal Portal est une maison de village centenaire à Torrefeta i Florejacs, restaurée avec soin pour conserver son caractère. Espaces partagés, cuisine à disposition des hôtes, et un porche où s’arrêter pour observer le ciel de La Segarra, l’un des endroits avec le moins de pollution lumineuse de Catalogne.',
  },
  activities: {
    title: 'Activités en La Segarra',
    intro: 'Torrefeta i Florejacs et les villages alentour invitent à marcher, pédaler et observer les étoiles.',
    list: [
      { name: 'Randonnées', desc: 'Chemins entre champs de céréales et petits villages médiévaux.' },
      { name: 'Observation des étoiles', desc: 'La Segarra est l’une des zones aux meilleurs ciels nocturnes de Catalogne.' },
      { name: 'Château de Florejacs', desc: 'Un château médiéval à quelques minutes à pied de la maison.' },
      { name: 'Balades à vélo', desc: 'Pistes et routes tranquilles pour découvrir la région à son rythme.' },
    ],
  },
  gallery: {
    title: 'Galerie',
  },
  contact: {
    title: 'Contact',
    intro: 'Écrivez-nous pour toute question, aussi si vous souhaitez réserver directement avec nous.',
    name: 'Nom',
    email: 'E-mail',
    phone: 'Téléphone',
    message: 'Message',
    send: 'Envoyer',
    success: 'Merci ! Nous avons bien reçu votre message et vous répondrons rapidement.',
  },
  booking: {
    title: 'Disponibilité et réservation',
    intro: 'Ce calendrier affiche la disponibilité combinée d’Airbnb et Booking. Si les dates vous conviennent, envoyez-nous une demande et nous vous la confirmerons par e-mail.',
    legendBusy: 'Occupé',
    legendFree: 'Disponible',
    loading: 'Chargement de la disponibilité...',
    error: 'Impossible de charger le calendrier pour le moment. Contactez-nous directement.',
    formTitle: 'Demande de réservation',
    room: 'Chambre',
    anyRoom: 'Peu importe / à définir',
    checkin: 'Date d’arrivée',
    checkout: 'Date de départ',
    guests: 'Nombre de personnes',
    requestBtn: 'Envoyer la demande',
    note: 'Cette demande n’est pas une réservation confirmée ; nous vous contacterons pour la confirmer.',
    success: 'Demande envoyée ! Nous confirmerons votre réservation par e-mail dès que possible.',
  },
  footer: {
    address: 'Torrefeta i Florejacs, La Segarra, Lleida',
    rights: 'Tous droits réservés.',
  },
};

export default fr;
