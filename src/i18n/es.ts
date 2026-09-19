import type ca from './ca';

const es: typeof ca = {
  nav: {
    home: 'Inicio',
    rooms: 'Habitaciones',
    house: 'La casa',
    activities: 'Actividades',
    gallery: 'Galería',
    contact: 'Contacto',
    book: 'Reserva',
  },
  site: {
    title: 'Cal Portal — Alojamiento rural en Torrefeta, La Segarra',
    tagline: 'Ven a disfrutar de la naturaleza en Torrefeta, Lleida',
  },
  hero: {
    welcome: 'Bienvenidos',
    toHouse: 'a nuestra',
    houseWord: 'casa de pueblo',
    titleHtml:
      '<span class="word-trigger" data-panel="lang">Bien<span class="glyph3">v</span>enidos</span> a <span class="word-trigger" data-panel="about"><span class="glyph3">n</span>uestra</span> cas<span class="glyph2">a</span> de puebl<span class="glyph3">o</span>',
    subtitle: 'Ven a disfrutar de la naturaleza en Torrefeta, Lleida',
    subtitleHtml: 'Ven a disfrutar de la naturaleza en <span class="word-trigger" data-panel="location">Torrefeta</span>, Lleida',
    ctaBook: 'Consultar disponibilidad',
    ctaRooms: 'Ver habitaciones',
    langPanelTitle: 'Elige idioma',
  },
  welcomeModal: {
    title: 'Bienvenidos',
    text: 'Cal Portal es una casa de pueblo en Torrefeta i Florejacs, en el corazón de La Segarra. Tres habitaciones pensadas para compartir, rodeadas de campos, cielo abierto y mucha calma.',
  },
  aboutModal: {
    title: 'Quiénes somos',
    names: ['Josefina', 'Miquel'],
    text: 'Somos Josefina y Miquel. Abrimos las puertas de nuestra casa para que encuentres lo mismo que encontramos nosotros: tiempo despacio y un pueblo de verdad.',
  },
  location: {
    title: 'Dónde estamos',
    text: 'Torrefeta i Florejacs, en el corazón de La Segarra, Lleida — campos abiertos y el castillo de Florejacs a pocos minutos a pie.',
    stats: [
      { label: 'Coordenadas', value: '41,75408° N, 1,27468° E', href: 'https://www.google.com/maps?q=41.754077,1.274676' },
      { label: 'Altitud', value: '475 m' },
      { label: 'Población', value: '589 hab. (2025)' },
      { label: 'Superficie', value: '88,9 km²' },
      { label: 'Comarca', value: 'La Segarra' },
    ],
    openInMaps: 'Abrir en Google Maps',
  },
  weather: {
    title: 'El tiempo en Torrefeta ahora mismo',
    loading: 'Consultando el cielo...',
    error: 'No hemos podido consultar el tiempo. Inténtalo más tarde.',
    feelsLike: 'Sensación',
    wind: 'Viento',
    humidity: 'Humedad',
    updated: 'Actualizado',
  },
  rooms: {
    title: 'Las habitaciones',
    intro: 'Tres habitaciones, cada una con su carácter, pensadas para descansar tras un día al aire libre.',
    list: [
      { name: 'Habitación del Portal', desc: 'La más soleada de la casa, con vistas abiertas a los campos de La Segarra.', capacity: '2 personas' },
      { name: 'Habitación de la Era', desc: 'Cálida y tranquila, ideal para quien busca desconectar del todo.', capacity: '2-3 personas' },
      { name: 'Habitación del Celler', desc: 'La más íntima, con los muros originales de piedra de la casa.', capacity: '2 personas' },
    ],
  },
  house: {
    title: 'La casa',
    body: 'Cal Portal es una casa de pueblo centenaria en Torrefeta i Florejacs, restaurada con cuidado para conservar su carácter. Espacios compartidos, cocina a disposición de los huéspedes, y un porche donde pararse a mirar el cielo de La Segarra, uno de los lugares con menos contaminación lumínica de Cataluña.',
  },
  activities: {
    title: 'Actividades en La Segarra',
    intro: 'Torrefeta i Florejacs y los pueblos cercanos invitan a caminar, pedalear y mirar estrellas.',
    list: [
      { name: 'Rutas de senderismo', desc: 'Caminos entre campos de cereal y pequeños pueblos medievales.' },
      { name: 'Observación de estrellas', desc: 'La Segarra es una de las zonas con mejores cielos nocturnos de Cataluña.' },
      { name: 'Castillo de Florejacs', desc: 'Un castillo medieval a pocos minutos a pie de la casa.' },
      { name: 'Rutas en bicicleta', desc: 'Pistas y carreteras tranquilas para descubrir la comarca con calma.' },
    ],
  },
  gallery: {
    title: 'Galería',
  },
  contact: {
    title: 'Contacto',
    intro: 'Escríbenos para cualquier duda, también si quieres reservar directamente con nosotros.',
    name: 'Nombre',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    message: 'Mensaje',
    send: 'Enviar',
    success: '¡Gracias! Hemos recibido tu mensaje y te responderemos lo antes posible.',
  },
  booking: {
    title: 'Disponibilidad y reserva',
    intro: 'Este calendario muestra la disponibilidad combinada de Airbnb y Booking. Si las fechas te van bien, envíanos una solicitud y te la confirmaremos por correo.',
    legendBusy: 'Ocupado',
    legendFree: 'Disponible',
    loading: 'Cargando disponibilidad...',
    error: 'No hemos podido cargar el calendario ahora mismo. Contacta con nosotros directamente.',
    formTitle: 'Solicitud de reserva',
    room: 'Habitación',
    anyRoom: 'Cualquiera / a determinar',
    checkin: 'Fecha de llegada',
    checkout: 'Fecha de salida',
    guests: 'Número de personas',
    requestBtn: 'Enviar solicitud',
    note: 'Esta solicitud no es una reserva confirmada; nos pondremos en contacto para confirmarla.',
    success: '¡Solicitud enviada! Te confirmaremos la reserva por correo lo antes posible.',
  },
  footer: {
    address: 'Torrefeta i Florejacs, La Segarra, Lleida',
    rights: 'Todos los derechos reservados.',
  },
};

export default es;
