import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SectionTitleAlign = 'left' | 'center';
export type SectionTitleHeadingLevel = 1 | 2 | 3;

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  readonly eyebrow = input<string | null>(null);
  readonly title = input.required<string>();
  readonly description = input<string | null>(null);
  readonly align = input<SectionTitleAlign>('left');
  readonly maxWidth = input<string | null>(null);
  readonly headingLevel = input<SectionTitleHeadingLevel>(2);
}
