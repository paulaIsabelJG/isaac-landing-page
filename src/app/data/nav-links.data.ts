import type { NavLink } from '../models/nav-link.model';

export const navLinks: NavLink[] = [
  { label: 'Inicio', target: '#hero' },
  { label: 'Cómo funciona', target: '/como-funciona' },
  { label: 'Funcionalidades', target: '#features' },
  { label: 'Para quién', target: '#audiences' },
  { label: 'Proyecto', target: '#trust' },
  { label: 'FAQ', target: '#faq' },
  { label: 'Solicitar demo', target: '#final-cta', isCta: true },
];
