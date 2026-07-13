import type { CollaboratorEntity } from '../models/collaborator-entity.model';

export const projectCollaborators: CollaboratorEntity[] = [
  {
    id: 'afim',
    name: 'Fundación AFIM Salamanca',
    role: 'Origen del Aprendizaje-Servicio y contexto de uso',
    contributions: [
      'Contacto con personas usuarias',
      'Identificación de necesidades',
      'Revisión de los primeros prototipos',
      'Retroalimentación profesional',
      'Carta de apoyo',
      'Colaboración en pruebas exploratorias',
      'Disposición para participar en futuras validaciones',
    ],
    imageSrc: '/images/logos/afim.webp',
    imageAlt: 'Logotipo de Fundación AFIM Salamanca',
  },
  {
    id: 'upsa-logopedia',
    name: 'Logopedia — Universidad Pontificia de Salamanca',
    role: 'Perspectiva comunicativa y funcional',
    contributions: [
      'Revisión de la construcción de frases',
      'Valoración de la predicción lingüística',
      'Análisis de mensajes telegráficos',
      'Orientación sobre diferentes perfiles',
      'Revisión del tablero circular predictivo',
      'Valoración del sistema como apoyo comunicativo',
    ],
    imageSrc: '/images/logos/upsa.webp',
    imageAlt: 'Logotipo de la Universidad Pontificia de Salamanca',
  },
  {
    id: 'junta-castilla-leon',
    name: 'Junta de Castilla y León',
    fullName: 'Equipo de Orientación Educativa Específico para la Discapacidad Motora de Valladolid',
    role: 'Accesibilidad motora y sistemas de acceso alternativo',
    contributions: [
      'Revisión para problemas complejos de comunicación',
      'Valoración de los formatos predictivos',
      'Análisis de la plasticidad del sistema',
      'Orientación sobre dispositivos de acceso',
      'Consideración de una futura integración con control ocular y Tobii',
    ],
    imageSrc: '/images/logos/junta-castilla-leon.webp',
    imageAlt: 'Logotipo de la Junta de Castilla y León',
  },
  {
    id: 'sacyl',
    name: 'SACYL — Medicina Interna',
    role: 'Exploración de la aplicabilidad en el entorno sanitario',
    contributions: [
      'Perspectiva de comunicación paciente-profesional',
      'Revisión de posibles casos de uso',
      'Aplicabilidad para personas sin habla oral temporal o permanente',
      'Exploración del uso en contextos hospitalarios',
    ],
    imageSrc: '/images/logos/sacyl.webp',
    imageAlt: 'Logotipo de SACYL',
  },
];
