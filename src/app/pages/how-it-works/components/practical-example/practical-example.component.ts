import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-practical-example',
  standalone: true,
  imports: [SectionTitleComponent, ScrollRevealDirective, LucideArrowRight],
  templateUrl: './practical-example.component.html',
  styleUrl: './practical-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracticalExampleComponent {
  protected readonly traditionalSteps = [
    'Buscar el pronombre',
    'Entrar en la categoría de verbos',
    'Seleccionar «querer»',
    'Entrar en otra categoría',
    'Seleccionar «comer»',
    'Volver atrás',
    'Entrar en «comida»',
    'Seleccionar «hamburguesa»',
    'Entrar en «tiempo»',
    'Seleccionar «mañana»',
    'Reproducir',
  ];

  protected readonly isaacSteps = [
    'Seleccionar conceptos principales',
    'Recibir sugerencias',
    'Reformular la frase',
    'Reproducir el mensaje',
  ];
}
