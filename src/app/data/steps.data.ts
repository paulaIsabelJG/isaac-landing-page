import type { Step } from '../models/step.model';

export const steps: Step[] = [
  {
    id: 'personaliza',
    number: 1,
    title: 'Personaliza',
    description:
      'Configura el perfil, el vocabulario y los pictogramas según las necesidades y el entorno de cada persona usuaria.',
    icon: 'sliders-horizontal',
  },
  {
    id: 'comunica',
    number: 2,
    title: 'Comunica',
    description:
      'Selecciona pictogramas y construye mensajes que se convierten en frases naturales y en voz.',
    icon: 'message-circle',
  },
  {
    id: 'aprende-mejora',
    number: 3,
    title: 'Aprende y mejora',
    description:
      'ISAAC aprende del uso diario para sugerir mejor y facilitar cada vez más la comunicación.',
    icon: 'trending-up',
  },
];
