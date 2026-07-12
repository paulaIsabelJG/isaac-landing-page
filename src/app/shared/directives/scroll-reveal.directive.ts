import { DestroyRef, Directive, ElementRef, Renderer2, afterNextRender, inject, input } from '@angular/core';

// Duración/easing replican los tokens $duration-slow y $ease-out de _tokens.scss.
const REVEAL_DURATION_MS = 450;
const REVEAL_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';
const REVEAL_OFFSET = '16px';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective {
  readonly threshold = input(0.15);
  readonly delay = input(0);
  readonly once = input(true);

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);

  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const host = this.elementRef.nativeElement;

    if (this.prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      this.show(host);
      return;
    }

    this.hide(host);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.show(host);
            if (this.once()) {
              this.observer?.unobserve(host);
            }
          } else if (!this.once()) {
            this.hide(host);
          }
        }
      },
      { threshold: this.threshold() },
    );

    this.observer.observe(host);

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  private hide(host: HTMLElement): void {
    const delayMs = this.delay();
    this.renderer.setStyle(host, 'opacity', '0');
    this.renderer.setStyle(host, 'transform', `translateY(${REVEAL_OFFSET})`);
    this.renderer.setStyle(
      host,
      'transition',
      `opacity ${REVEAL_DURATION_MS}ms ${REVEAL_EASING} ${delayMs}ms, ` +
        `transform ${REVEAL_DURATION_MS}ms ${REVEAL_EASING} ${delayMs}ms`,
    );
  }

  private show(host: HTMLElement): void {
    this.renderer.setStyle(host, 'opacity', '1');
    this.renderer.setStyle(host, 'transform', 'none');
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
