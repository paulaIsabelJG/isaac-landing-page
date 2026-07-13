import type { ProjectNextSteps } from '../models/project.model';

export const projectNextSteps: ProjectNextSteps = {
  title: 'Los siguientes pasos de ISAAC',
  scheduled: [
    { date: 'Julio de 2026', label: 'Registro del software' },
    { date: 'Septiembre de 2026', label: 'Publicación científica prevista' },
    { date: 'Septiembre-octubre de 2026', label: 'Fase nacional de Santander X' },
  ],
  evolutionLines: [
    'Validación con personas usuarias, profesionales y familias',
    'Pruebas piloto en organizaciones',
    'Mejora del predictor con datos reales',
    'Integración con dispositivos de acceso alternativo',
    'Compatibilidad futura con seguimiento ocular',
    'Optimización de la voz personalizada',
    'Mejora de seguridad y escalabilidad',
    'Consolidación del modelo de negocio',
  ],
};
