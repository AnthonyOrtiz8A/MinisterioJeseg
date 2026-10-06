// Contenido de la iglesia. Los valores marcados como "pendiente" se reemplazan con la información real.

export const iglesia = {
  nombre: 'Iglesia Mega JESEG',
  lema: 'Jesucristo es Señor en Guatemala',
  descripcion:
    'Una familia que adora a Dios, crece en Su Palabra y sirve a Guatemala y las naciones. ¡Te esperamos!',
  telefono: '+502 0000 0000',
  correo: 'info@megajeseg.org',
  direccion: 'San Antonio Los Tamarindos, El Astillero, Chiquimulilla, Santa Rosa',
  mapaUrl: 'https://maps.app.goo.gl/9GhpW1HNmh94NcoD7',
  coordenadas: { lat: 14.063229, lng: -90.366545 },
}

export const versiculoDelAnio = {
  texto:
    'Más bien, crezcan en la gracia y en el conocimiento de nuestro Señor y Salvador Jesucristo. ¡A él sea toda la gloria ahora y para siempre! Amén.',
  cita: '2 Pedro 3:18',
}

// Datos generales: dejar en null mientras no se tenga el dato.
export const datosIglesia: { anioFundacion: string | null; integrantes: string | null } = {
  anioFundacion: null,
  integrantes: null,
}

export const valores = [
  {
    titulo: 'Quiénes somos',
    texto:
      'Somos una iglesia cristiana que cree que Jesucristo es Señor sobre Guatemala, nuestras familias y nuestra vida.',
  },
  {
    titulo: 'Misión',
    texto: 'Predicar el evangelio, hacer discípulos y llevar a cada persona a una relación viva con Dios.',
  },
  {
    titulo: 'Visión',
    texto: 'Ver familias restauradas y una generación encendida que impacte Guatemala y las Américas.',
  },
]

// Pastores y líderes: completar nombres y, si se desea, una foto.
export const integrantes: { nombre: string | null; cargo: string; foto?: string }[] = [
  { nombre: null, cargo: 'Pastor general' },
  { nombre: null, cargo: 'Pastora general' },
  { nombre: null, cargo: 'Líder de jóvenes' },
  { nombre: null, cargo: 'Líder de mujeres' },
]

export type Culto = { nombre: string; hora: string; descripcion: string }

// Índice 0 = domingo (igual que Date.getDay()).
export const cultosPorDia: { dia: string; cultos: Culto[] }[] = [
  {
    dia: 'Domingo',
    cultos: [{ nombre: 'Servicio general', hora: '6:30 – 8:30 PM', descripcion: 'Adoración y Palabra para toda la familia.' }],
  },
  {
    dia: 'Lunes',
    cultos: [{ nombre: 'Noche de semilla', hora: '6:30 – 8:30 PM', descripcion: 'Sembramos en el Reino con fe y gratitud.' }],
  },
  {
    dia: 'Martes',
    cultos: [{ nombre: 'Intercesión', hora: '6:30 – 8:30 PM', descripcion: 'Oramos por las familias, la iglesia y la nación.' }],
  },
  {
    dia: 'Miércoles',
    cultos: [
      { nombre: 'Ayuno de mujeres', hora: '9:00 AM – 12:00 PM', descripcion: 'Mañana de ayuno y oración para mujeres.' },
      { nombre: 'Servicio de jóvenes', hora: '7:00 – 8:30 PM', descripcion: 'Una generación encendida por Jesús.' },
    ],
  },
  {
    dia: 'Jueves',
    cultos: [{ nombre: 'Doctrina', hora: '6:30 – 8:30 PM', descripcion: 'Enseñanza bíblica para crecer en la fe.' }],
  },
  {
    dia: 'Viernes',
    cultos: [{ nombre: 'Metanoia', hora: '6:30 – 8:30 PM', descripcion: 'Noche de arrepentimiento y transformación.' }],
  },
  {
    dia: 'Sábado',
    cultos: [{ nombre: 'Servicio general', hora: '6:30 – 8:30 PM', descripcion: 'Adoración y Palabra para toda la familia.' }],
  },
]

// Redes sociales: reemplazar las URL y el número de WhatsApp (código de país + número, sin "+").
export const redes = {
  facebook: { url: 'https://facebook.com/', usuario: 'Mega JESEG' },
  instagram: { url: 'https://instagram.com/', usuario: '@megajeseg' },
  tiktok: { url: 'https://tiktok.com/', usuario: '@megajeseg' },
  whatsapp: { numero: '50200000000', usuario: '+502 0000 0000' },
}
