import type { Dict } from "../types";

const es: Dict = {
  nav: {
    english: "English",
    portuguese: "Português",
    spanish: "Español",
  },
  hero: {
    headline: "El mejor lugar para material de kite en",
    country: "Portugal",
    subhead:
      "¿Cansado de rebuscar en grupos de WhatsApp? KiteZap te permite buscar y filtrar anuncios reales — encuentra exactamente lo que necesitas en segundos.",
    ctaBeta: "Quiero probarlo ya",
    ctaNotify: "Avísame cuando esté listo",
  },
  problem: {
    title: "¿Por qué KiteZap es mejor?",
    bullets: [
      "Los anuncios desaparecen en el historial del grupo en cuestión de minutos",
      "Sin búsqueda, sin filtros — haces scroll sin fin esperando ver el material adecuado",
      "Cuando por fin lo ves, alguien ya lo compró",
      "Publicas tu material para vender y no recibes respuestas — tu anuncio se ahoga en un océano de mensajes antes de que algún comprador lo note",
    ],
  },
  listings: {
    title: "Búsqueda real. Filtros reales.",
    subtitle:
      "Esto es lo que un grupo de WhatsApp nunca te dará — cada anuncio, filtrable en segundos.",
    searchPlaceholder: "Buscar marca, modelo, ubicación…",
    filtersTitle: "Filtros",
    filters: {
      type: "Tipo de equipo",
      brand: "Marca",
      model: "Modelo",
      year: "Año",
      priceRange: "Rango de precio",
      condition: "Estado",
      location: "Ubicación",
    },
    anyOption: "Cualquiera",
    card: {
      price: "Precio",
      condition: "Estado",
      location: "Ubicación",
      year: "Año",
      express: "Me interesa",
      viewDetails: "Ver detalles",
    },
    conditions: {
      new: "Nuevo",
      excellent: "Excelente",
      good: "Bueno",
      fair: "Aceptable",
    },
    types: {
      kite: "Cometa",
      board: "Tabla",
      bar: "Barra",
      harness: "Arnés",
      wetsuit: "Neopreno",
    },
  },
  buying: {
    title: "Cómo comprar",
    steps: [
      "Busca y filtra anuncios por tipo de material, marca, precio, ubicación y más",
      "Encuentra lo que quieres — haz clic para mostrar interés",
      "Deja tu número de WhatsApp — el vendedor te contactará directamente",
    ],
    privacyTitle: "Tu número se queda privado",
    privacyBody:
      "Tu número va solo al vendedor — nunca se muestra en la plataforma. Es el vendedor quien da el primer paso.",
  },
  selling: {
    title: "Cómo vender",
    steps: [
      "Envía un mensaje de WhatsApp a KiteZap con los detalles del material",
      "La IA redacta tu anuncio y lo confirma contigo",
      "Tu anuncio se publica — los compradores muestran interés y tú los contactas directamente",
    ],
    tagline: "Sin cuenta, sin formulario, sin complicaciones.",
  },
  free: {
    badge: "100% gratis",
    title: "KiteZap es gratis. Siempre.",
    body: "Sin tarifas de anuncio, sin tarifas de transacción, sin comisiones. El precio que acordáis es entre tú y la otra persona — la plataforma nunca lo toca.",
    note: "Hecho por un kiter que se cansó de hacer scroll sin fin en grupos de WhatsApp buscando una cometa de 9m, acabando comprando una de 8m porque no encontraba lo que buscaba.",
  },
  cta: {
    title: "Dale forma a KiteZap con nosotros",
    subtitle:
      "Estamos validando el interés antes de construirla juntos. Elige la opción que mejor te encaje.",
    betaLabel: "Quiero probarlo ya",
    betaSub: "Únete a la beta — prueba la plataforma y dale forma con nosotros.",
    notifyLabel: "Avísame cuando esté listo",
    notifySub: "Te avisamos el día del lanzamiento. Nada de spam.",
    whatsappLabel: "Número de WhatsApp",
    whatsappPlaceholder: "+34 …",
    emailLabel: "Email",
    emailOptional: "opcional",
    emailPlaceholder: "tu@ejemplo.com",
    submit: "Apuntarme",
    followUp: "¿Eres más comprador o vendedor de material?",
    buy: "Comprar",
    sell: "Vender",
    both: "Ambos",
    thanksTitle: "Gracias — estás en la lista.",
    thanksBody:
      "Te contactaremos por WhatsApp. Mientras tanto, cuéntaselo a un amigo kiter harto de hacer scroll en grupos.",
  },
};

export default es;
