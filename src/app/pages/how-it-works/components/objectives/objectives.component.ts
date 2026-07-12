import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideTarget } from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [SectionTitleComponent, SafeImageComponent, ScrollRevealDirective, LucideTarget],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectivesComponent {
  protected readonly details = [
    'Crear objetivos',
    'Asociarlos a una persona',
    'Añadir comentarios',
    'Revisar el progreso',
    'Adaptar tableros',
    'Volver a personalizar',
  ];
}
