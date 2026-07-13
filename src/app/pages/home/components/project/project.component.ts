import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { OriginComponent } from './origin/origin.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CurrentStateComponent } from './current-state/current-state.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ProjectCtaComponent } from './project-cta/project-cta.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    SectionTitleComponent,
    OriginComponent,
    TimelineComponent,
    CollaboratorsComponent,
    CurrentStateComponent,
    NextStepsComponent,
    ProjectCtaComponent,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {}
