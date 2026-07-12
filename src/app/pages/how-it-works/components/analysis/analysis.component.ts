import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideChartPie, LucideCheck } from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [SectionTitleComponent, SafeImageComponent, ScrollRevealDirective, LucideChartPie, LucideCheck],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysisComponent {
  protected readonly details = [
    'Total de frases',
    'Pictogramas más utilizados',
    'Tiempo medio de construcción',
    'Uso de tableros',
    'Número de interacciones',
    'Reconstrucción de frases',
    'Filtros por fecha',
    'Exportaciones',
  ];
}
