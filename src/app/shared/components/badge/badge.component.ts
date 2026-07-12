import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideDynamicIcon, type LucideIconInput } from '@lucide/angular';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'neutral';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly text = input.required<string>();
  readonly icon = input<LucideIconInput | null>(null);
  readonly variant = input<BadgeVariant>('neutral');
  readonly size = input<BadgeSize>('md');

  protected readonly classes = computed(() =>
    ['badge', `badge--${this.variant()}`, `badge--${this.size()}`].join(' '),
  );
}
