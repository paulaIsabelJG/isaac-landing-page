import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideFilePlus2, LucideUpload } from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-board-creation',
  standalone: true,
  imports: [SectionTitleComponent, SafeImageComponent, ScrollRevealDirective, LucideFilePlus2, LucideUpload],
  templateUrl: './board-creation.component.html',
  styleUrl: './board-creation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardCreationComponent {
  protected readonly createDetails = [
    'Elegir el tipo de tablero',
    'Definir filas, columnas o distribución',
    'Añadir pictogramas',
    'Configurar acciones',
    'Asignar el tablero',
  ];

  protected readonly importDetails = [
    'Cargar archivos OBZ',
    'Recuperar estructura y contenido',
    'Continuar editando en ISAAC',
    'Facilitar la interoperabilidad',
  ];
}
