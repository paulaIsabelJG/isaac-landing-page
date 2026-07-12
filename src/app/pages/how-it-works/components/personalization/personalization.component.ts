import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-personalization',
  standalone: true,
  imports: [SectionTitleComponent, SafeImageComponent, ScrollRevealDirective],
  templateUrl: './personalization.component.html',
  styleUrl: './personalization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalizationComponent {
  protected readonly details = [
    'Tableros en cuadrícula',
    'Tableros circulares',
    'Multitableros',
    'Pictogramas de ARASAAC',
    'Pictogramas propios',
    'Etiquetas',
    'Colores',
    'Vocalizaciones',
    'Acciones de navegación',
    'Barras de control',
    'Usuarios asignados',
    'Configuración de voz',
  ];

  protected readonly gallery = [
    {
      src: '/images/how-it-works/board-builder.webp',
      alt: 'Board Builder de ISAAC durante la edición de un tablero',
      title: 'Board Builder',
      caption: 'Board Builder',
    },
    {
      src: '/images/how-it-works/custom-pictograms.webp',
      alt: 'Selector de pictogramas propios y de ARASAAC en ISAAC',
      title: 'Pictogramas propios',
      caption: 'Pictogramas propios',
    },
    {
      src: '/images/how-it-works/voice-settings.webp',
      alt: 'Panel de configuración de voz de ISAAC',
      title: 'Configuración de voz',
      caption: 'Voz',
    },
  ];
}
