import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from '../../../../../shared/components/badge/badge.component';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../../shared/directives/scroll-reveal.directive';
import { projectOrigin } from '../../../../../data/project-origin.data';

@Component({
  selector: 'app-origin',
  standalone: true,
  imports: [BadgeComponent, SafeImageComponent, ScrollRevealDirective],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OriginComponent {
  protected readonly origin = projectOrigin;
}
