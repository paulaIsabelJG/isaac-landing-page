import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import { LucideChevronDown } from '@lucide/angular';
import type { FaqItem } from '../../../models/faq-item.model';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [LucideChevronDown],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  private static nextId = 0;

  readonly items = input.required<FaqItem[]>();
  readonly allowMultiple = input<boolean>(false);
  readonly firstOpen = input<boolean>(false);

  protected readonly instanceId = `accordion-${AccordionComponent.nextId++}`;

  private readonly headerButtons = viewChildren<ElementRef<HTMLButtonElement>>('headerButton');
  private readonly expandedIds = signal<ReadonlySet<string>>(new Set());
  private initialized = false;

  constructor() {
    effect(() => {
      const items = this.items();
      if (this.initialized || items.length === 0) return;

      this.initialized = true;
      if (this.firstOpen()) {
        this.expandedIds.set(new Set([items[0].id]));
      }
    });
  }

  protected isExpanded(id: string): boolean {
    return this.expandedIds().has(id);
  }

  protected toggle(id: string): void {
    const next = new Set(this.expandedIds());

    if (next.has(id)) {
      next.delete(id);
    } else {
      if (!this.allowMultiple()) {
        next.clear();
      }
      next.add(id);
    }

    this.expandedIds.set(next);
  }

  protected onKeydown(event: KeyboardEvent, index: number): void {
    const buttons = this.headerButtons();
    if (buttons.length === 0) return;

    let targetIndex: number | null = null;

    switch (event.key) {
      case 'ArrowDown':
        targetIndex = (index + 1) % buttons.length;
        break;
      case 'ArrowUp':
        targetIndex = (index - 1 + buttons.length) % buttons.length;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = buttons.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    buttons[targetIndex].nativeElement.focus();
  }
}
