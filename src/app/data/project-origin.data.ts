import type { ProjectOrigin } from '../models/project.model';

export const projectOrigin: ProjectOrigin = {
  title: 'Una necesidad real detrás de la tecnología',
  mainText:
    'ISAAC nace durante el curso 2024-2025 como un proyecto de Aprendizaje-Servicio desarrollado junto a Fundación AFIM Salamanca.',
  extendedText:
    'El primer prototipo se creó en las asignaturas Diseño, Evaluación y Desarrollo de Interfaces y Servicios y Plataformas Web, ambas calificadas con Matrícula de Honor. Esta etapa permitió conocer directamente el contexto de uso, identificar barreras de comunicación y convertir esas necesidades en una primera propuesta digital.',
  technicalText:
    'El proceso comenzó con la investigación del problema y el diseño de la experiencia en Figma, incluyendo la identidad visual, los personajes y los primeros flujos de interacción. Posteriormente, la propuesta se transformó en un prototipo funcional desarrollado con Angular, Node.js y MongoDB.',
  highlight:
    'ISAAC no nació únicamente de una idea tecnológica, sino del contacto con personas, profesionales y necesidades reales de comunicación.',
  tags: [
    'Aprendizaje-Servicio',
    'Fundación AFIM Salamanca',
    'Diseño centrado en las personas',
    'Figma',
    'Angular',
    'Node.js',
    'MongoDB',
    'Dos Matrículas de Honor',
  ],
  imageSrc: '/images/project/afim-origin.webp',
  imageAlt: 'Contacto inicial con Fundación AFIM Salamanca durante la fase de Aprendizaje-Servicio',
  secondaryImageSrc: '/images/project/first-prototype.webp',
  secondaryImageAlt: 'Primer prototipo funcional de ISAAC desarrollado en el curso 2024-2025',
  tertiaryImageSrc: '/images/project/figma-design.webp',
  tertiaryImageAlt: 'Diseño de la identidad visual y los flujos de interacción de ISAAC en Figma',
};
