import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { LucideImage } from '@lucide/angular';

export type SafeImageObjectFit = 'cover' | 'contain';
export type SafeImageRounded = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-safe-image',
  standalone: true,
  imports: [LucideImage],
  templateUrl: './safe-image.component.html',
  styleUrl: './safe-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeImageComponent {
  readonly src = input<string | null>(null);
  readonly alt = input.required<string>();
  readonly placeholderTitle = input<string>('Imagen no disponible');
  readonly placeholderDescription = input<string>('Esta imagen se añadirá próximamente.');
  readonly width = input<string | number | null>(null);
  readonly height = input<string | number | null>(null);
  readonly aspectRatio = input<string | null>(null);
  readonly objectFit = input<SafeImageObjectFit>('cover');
  readonly eager = input<boolean>(false);
  readonly rounded = input<SafeImageRounded>('md');

  private readonly hasError = signal(false);

  protected readonly showPlaceholder = computed(() => !this.src() || this.hasError());

  protected readonly hostClasses = computed(
    () => `safe-image safe-image--rounded-${this.rounded()}`,
  );

  protected readonly hostStyle = computed(() => {
    const style: Record<string, string> = {};
    const width = this.width();
    const height = this.height();
    const aspectRatio = this.aspectRatio();

    if (width !== null) style['width'] = this.toCssLength(width);
    if (height !== null) style['height'] = this.toCssLength(height);
    if (aspectRatio) style['aspect-ratio'] = aspectRatio;

    return style;
  });

  protected readonly widthAttr = computed(() => {
    const width = this.width();
    return typeof width === 'number' ? width : null;
  });

  protected readonly heightAttr = computed(() => {
    const height = this.height();
    return typeof height === 'number' ? height : null;
  });

  constructor() {
    // Cada vez que cambia la fuente, se le da otra oportunidad de cargar.
    effect(() => {
      this.src();
      this.hasError.set(false);
    });
  }

  protected onError(): void {
    this.hasError.set(true);
  }

  private toCssLength(value: string | number): string {
    return typeof value === 'number' ? `${value}px` : value;
  }
}
