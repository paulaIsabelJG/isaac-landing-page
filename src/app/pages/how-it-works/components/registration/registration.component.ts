import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideClipboardList } from '@lucide/angular';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { SafeImageComponent } from '../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [SectionTitleComponent, SafeImageComponent, ScrollRevealDirective, LucideClipboardList],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  protected readonly details = [
    'Pictogramas seleccionados',
    'Orden de selección',
    'Frases creadas',
    'Navegación entre tableros',
    'Tiempo de construcción',
    'Resultado final',
    'Sesión y contexto de uso',
  ];
}
