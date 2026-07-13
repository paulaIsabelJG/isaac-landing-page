import type { CycleStep } from '../models/cycle-step.model';

export const cycleSteps: CycleStep[] = [
  {
    id: 'crear-importar',
    number: 1,
    title: 'Crear o importar',
    shortTitle: 'Crear',
    anchor: 'crear',
    summary: 'Empieza desde cero o reutiliza tableros compatibles.',
    description:
      'Crea un tablero desde cero o importa un archivo compatible en formato OBZ para continuar trabajando sobre materiales ya preparados.',
    details: [
      'Creación manual de tableros',
      'Importación OBZ',
      'Tableros en cuadrícula',
      'Tableros circulares',
      'Multitableros',
    ],
    icon: 'file-plus-2',
    accent: 'primary',
  },
  {
    id: 'personalizar',
    number: 2,
    title: 'Personalizar',
    shortTitle: 'Personalizar',
    anchor: 'personalizar',
    summary: 'Adapta pictogramas, estructura, navegación y voz.',
    description:
      'Adapta el tablero a cada persona desde el Board Builder, modificando estructura, pictogramas, acciones, voz y usuarios asignados.',
    details: [
      'Board Builder',
      'Pictogramas de ARASAAC',
      'Pictogramas propios',
      'Colores y etiquetas',
      'Acciones de navegación',
      'Voz',
      'Usuarios asignados',
    ],
    icon: 'sliders-horizontal',
    accent: 'secondary',
  },
  {
    id: 'comunicar',
    number: 3,
    title: 'Comunicar',
    shortTitle: 'Comunicar',
    anchor: 'comunicar',
    summary: 'Construye frases y reproduce mensajes mediante voz.',
    description:
      'La persona construye frases mediante pictogramas, navega entre tableros y reproduce el mensaje en voz alta.',
    details: [
      'Selección de pictogramas',
      'Banda de frase',
      'Predictor con IA',
      'Reformulación de frases',
      'Reproducción por voz',
    ],
    icon: 'message-circle',
    accent: 'green',
  },
  {
    id: 'registrar',
    number: 4,
    title: 'Registrar',
    shortTitle: 'Registrar',
    anchor: 'registrar',
    summary: 'Conserva las interacciones de la sesión mediante OBL.',
    description:
      'ISAAC registra las interacciones de cada sesión mediante OBL para conservar información sobre selecciones, frases, navegación y tiempos.',
    details: ['Eventos OBL', 'Frases creadas', 'Interacciones', 'Navegación', 'Tiempo de uso'],
    icon: 'clipboard-list',
    accent: 'yellow',
  },
  {
    id: 'analizar',
    number: 5,
    title: 'Analizar',
    shortTitle: 'Analizar',
    anchor: 'analizar',
    summary: 'Revisa frases, tableros y patrones de uso.',
    description:
      'Profesionales y organizaciones pueden consultar estadísticas, reconstruir frases y detectar patrones de uso o posibles dificultades.',
    details: [
      'Estadísticas',
      'Pictogramas más utilizados',
      'Tiempo de construcción',
      'Tableros consultados',
      'Reconstrucción de frases',
      'Exportaciones',
    ],
    icon: 'chart-pie',
    accent: 'coral',
  },
  {
    id: 'establecer-objetivos',
    number: 6,
    title: 'Establecer objetivos',
    shortTitle: 'Objetivos',
    anchor: 'objetivos',
    summary: 'Convierte la información en ajustes y nuevas metas.',
    description:
      'Los datos permiten definir objetivos comunicativos, añadir comentarios y revisar la evolución para seguir adaptando el sistema.',
    details: [
      'Objetivos comunicativos o terapéuticos',
      'Comentarios',
      'Seguimiento',
      'Revisión de la evolución',
      'Nueva personalización',
    ],
    icon: 'target',
    // Mismo acento que el paso 2 (Personalizar): refuerza visualmente que
    // el ciclo se cierra volviendo a personalizar el sistema.
    accent: 'secondary',
  },
];
