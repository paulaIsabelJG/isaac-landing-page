import type { ProjectCurrentState } from '../models/project.model';

export const projectCurrentState: ProjectCurrentState = {
  title: 'Un prototipo funcional preparado para la siguiente etapa',
  text: 'ISAAC es actualmente un prototipo funcional avanzado. La aplicación integra los principales módulos necesarios para crear, personalizar, utilizar, registrar, analizar y exportar tableros de comunicación.',
  badgeText: 'Prototipo funcional en fase de validación',
  imageSrc: '/images/project/isaac-current.webp',
  imageAlt: 'Vista actual de la plataforma ISAAC',
  completed: [
    'Desarrollo de la plataforma',
    'Pruebas funcionales',
    'Primeras pruebas exploratorias',
    'Arquitectura modular',
    'Funciones de IA',
    'Analítica y objetivos',
    'Participación en programas de emprendimiento',
    'Primeros reconocimientos y apoyos externos',
  ],
  next: [
    'Pruebas más amplias',
    'Validación con usuarios y profesionales',
    'Pilotos en centros',
    'Mejora del predictor',
    'Optimización de la voz',
    'Acceso alternativo',
    'Protección del software',
    'Transferencia y modelo de negocio',
  ],
};
