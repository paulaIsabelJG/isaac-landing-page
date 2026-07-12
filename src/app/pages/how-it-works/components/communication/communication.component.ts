import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideArrowRight, LucideVolume2 } from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [SectionTitleComponent, SafeImageComponent, ScrollRevealDirective, LucideArrowRight, LucideVolume2],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunicationComponent {
  protected readonly sequence = ['Yo', 'Querer', 'Comer', 'Hamburguesa', 'Mañana'];

  protected readonly flowSteps = [
    'Selección de pictogramas',
    'Construcción de la banda de frase',
    'Sugerencias del predictor',
    'Reformulación opcional',
    'Reproducción por voz',
  ];
}
