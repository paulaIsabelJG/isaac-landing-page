import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SafeImageComponent } from '../../../../../shared/components/safe-image/safe-image.component';
import { ScrollRevealDirective } from '../../../../../shared/directives/scroll-reveal.directive';
import { projectCollaborators } from '../../../../../data/project-collaborators.data';

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [SafeImageComponent, ScrollRevealDirective],
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollaboratorsComponent {
  protected readonly collaborators = projectCollaborators;
}
