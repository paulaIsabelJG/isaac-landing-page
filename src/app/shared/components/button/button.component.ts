import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, type QueryParamsHandling } from '@angular/router';
import { LucideDynamicIcon, type LucideIconInput } from '@lucide/angular';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';
export type ButtonIconPosition = 'left' | 'right';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, LucideDynamicIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly href = input<string | null>(null);
  readonly routerLink = input<string | unknown[] | null>(null);
  readonly queryParamsHandling = input<QueryParamsHandling | null>(null);
  readonly type = input<ButtonHtmlType>('button');
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string | null>(null);
  readonly icon = input<LucideIconInput | null>(null);
  readonly iconPosition = input<ButtonIconPosition>('left');
  readonly fullWidth = input<boolean>(false);

  protected readonly classes = computed(() => {
    const classes = ['btn', `btn--${this.variant()}`, `btn--${this.size()}`];
    if (this.fullWidth()) classes.push('btn--full');
    if (this.disabled()) classes.push('btn--disabled');
    return classes.join(' ');
  });

  protected onAnchorClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
