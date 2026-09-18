# Cal Portal — web en Astro

Nueva versión de cal-portal.com, construida en [Astro](https://astro.build), a partir de la
identidad visual de la landing anterior (colores crema/cobre, tipografía Arno, ilustraciones
de la casa, el gato y los árboles). Multiidioma (ca/es/fr/en), con animaciones, un widget de
clima en tiempo real y un calendario de disponibilidad + solicitud de reserva pensado para
convivir con Airbnb y Booking.com.

## Cómo se ha organizado

- `src/pages/[lang]/` — cada página se genera una vez por idioma (`ca`, `es`, `fr`, `en`)
  gracias a `getStaticPaths`. Para añadir una página nueva a los 4 idiomas, créala aquí una
  sola vez.
- `src/i18n/` — un archivo de traducciones por idioma (`ca.ts` es el "maestro"; `es.ts`,
  `fr.ts` y `en.ts` deben mantener las mismas claves). Aquí es donde se edita **todo el texto**
  del sitio.
- `src/components/` — piezas reutilizables: cabecera, pie, hero, el gato interactivo, el
  widget del tiempo, el calendario de disponibilidad y los formularios.
- `public/img`, `public/fonts` — los assets originales (logos, ilustraciones, fuente Arno)
  copiados desde vuestra carpeta de diseño.
- `netlify/functions/availability.js` — función que combina los calendarios iCal de Airbnb
  y Booking (ver más abajo).

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para comprobar el build
```

**Nota:** el calendario de disponibilidad (`/api/availability`) solo funciona desplegado en
Netlify o corriendo `netlify dev` (usa una Netlify Function). Con `astro dev`/`preview` a
secas mostrará el mensaje de "no se ha podido cargar el calendario", es normal.

## Contenido pendiente de revisar

Este primer avance usa contenido de ejemplo que hay que revisar y sustituir:

- **Textos de habitaciones, actividades y "la casa"** (`src/i18n/ca.ts` y sus equivalentes)
  son un punto de partida razonable pero inventado — hay que ajustarlos a la realidad de Cal
  Portal (nombres reales de las habitaciones, aforo, actividades que recomendéis de verdad).
- **Galería** (`src/pages/[lang]/galeria.astro`): usa de momento las imágenes de fondo que ya
  teníais. Hay que sustituirlas por fotos reales de las habitaciones y la casa.
- Las traducciones a **castellano, francés e inglés** las he escrito yo a partir del catalán;
  vale la pena que alguien nativo les eche un vistazo antes de publicar.

## Desplegar en Netlify

1. Sube este proyecto a un repositorio Git (GitHub/GitLab) — es la forma más cómoda de
   conectarlo a Netlify y que cada cambio se despliegue solo.
2. En Netlify: **Add new site → Import an existing project**, conecta el repositorio.
   Netlify detectará `netlify.toml` automáticamente (build: `npm run build`, publish: `dist`,
   funciones: `netlify/functions`).
3. Configura el dominio `cal-portal.com` en **Site settings → Domain management**.
4. Activa **Forms** (Netlify lo hace automático al detectar los formularios con
   `data-netlify="true"`): las solicitudes de reserva y los mensajes de contacto llegarán al
   panel de Netlify (Site → Forms), desde donde puedes reenviarlos por email.

## Conectar los calendarios de Airbnb y Booking

El calendario de disponibilidad no inventa nada: combina los calendarios iCal que Airbnb y
Booking ya generan para vosotros.

1. **Airbnb**: en el calendario de cada anuncio → *Disponibilidad* → *Sincronizar calendarios*
   → copia el enlace de "Exportar calendario" (formato `.ics`).
2. **Booking.com**: en la extranet → *Calendario y precios* → *Sincronización de calendarios*
   → copia el enlace de exportación iCal de cada tipo de habitación.
3. En Netlify, ve a **Site settings → Environment variables** y crea `ICAL_FEEDS` con un JSON
   como este (un objeto por calendario que tengáis; `room` puede ser `portal`, `era`, `celler`
   o `general` si Airbnb/Booking solo os dan un calendario para toda la casa):

   ```json
   [
     { "room": "portal", "source": "airbnb", "url": "https://www.airbnb.com/calendar/ical/XXXX.ics" },
     { "room": "portal", "source": "booking", "url": "https://admin.booking.com/.../ical" },
     { "room": "era", "source": "airbnb", "url": "..." },
     { "room": "celler", "source": "airbnb", "url": "..." }
   ]
   ```

4. Vuelve a desplegar el sitio. El calendario de `/reserves` empezará a mostrar los días
   ocupados de verdad.

Mientras `ICAL_FEEDS` no esté configurado, el calendario funciona en "modo demostración"
(todo aparece disponible) para que se pueda revisar el diseño sin depender de esas cuentas.

**Importante sobre la sincronización:** Airbnb y Booking actualizan estos calendarios cada
1-4 horas aproximadamente, no al instante. Para una casa de 3 habitaciones es un riesgo bajo,
pero conviene saberlo. Las solicitudes que lleguen por el formulario de la web no se
confirman solas: hay que confirmarlas a mano por email y bloquear la fecha en Airbnb/Booking
(en un futuro, si interesa, se puede automatizar generando también un iCal propio que Airbnb
y Booking importen).

## Widget del tiempo

Usa la API pública y gratuita de [Open-Meteo](https://open-meteo.com) (no requiere clave),
con las coordenadas de Torrefeta i Florejacs. Se actualiza cada 15 minutos en el navegador
del visitante.
