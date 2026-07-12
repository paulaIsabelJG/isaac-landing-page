import type { FaqItem } from '../models/faq-item.model';

export const faqItems: FaqItem[] = [
  {
    id: 'que-es-isaac',
    question: '¿Qué es ISAAC?',
    answer:
      'ISAAC es un Sistema Aumentativo y Alternativo de Comunicación (SAAC) inteligente y personalizable, pensado para personas con discapacidad cognitiva o dificultades en la comunicación oral. Combina pictogramas, síntesis de voz, personalización e inteligencia artificial para facilitar una comunicación más rápida, natural y autónoma.',
  },
  {
    id: 'a-quien-va-dirigido',
    question: '¿A quién va dirigido?',
    answer:
      'A personas con dificultades de comunicación oral (por discapacidad cognitiva, trastornos del desarrollo u otras causas), así como a las familias y a los profesionales —logopedas, educadores, terapeutas— que las acompañan.',
  },
  {
    id: 'necesita-conexion',
    question: '¿Necesita conexión a internet?',
    answer:
      'ISAAC está pensado para que las funciones esenciales de comunicación puedan usarse sin depender de una conexión constante. Algunas funciones basadas en inteligencia artificial sí pueden requerir conexión; este comportamiento se seguirá afinando a medida que el proyecto avance.',
  },
  {
    id: 'personalizar-pictogramas',
    question: '¿Se pueden personalizar los pictogramas?',
    answer:
      'Sí. Los pictogramas se pueden personalizar, incluyendo imágenes y fotografías propias, para adaptarse al vocabulario, el entorno y las necesidades de cada persona usuaria.',
  },
  {
    id: 'ia-decide-comunicacion',
    question: '¿La inteligencia artificial decide lo que comunica la persona?',
    answer:
      'No. La inteligencia artificial de ISAAC actúa siempre como apoyo: sugiere, predice y ayuda a reformular frases, pero no impone el mensaje ni sustituye la intención comunicativa de la persona usuaria. La decisión final es siempre de quien se comunica.',
  },
  {
    id: 'sustituye-profesional',
    question: '¿ISAAC sustituye al profesional?',
    answer:
      'No. ISAAC es una herramienta de apoyo a la comunicación, no un sustituto de logopedas, terapeutas ni educadores. Está pensado para complementar su trabajo y facilitar la comunicación en el día a día.',
  },
  {
    id: 'disponibilidad-actual',
    question: '¿Está disponible actualmente?',
    answer:
      'Actualmente ISAAC es un prototipo funcional en fase de validación y mejora continua. Todavía no está disponible públicamente, pero seguimos trabajando para que pueda llegar a más personas.',
  },
];
