import { Directive, effect, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInput]',
  standalone: true,
})
export class InputDirective {
  private renderer2 = inject(Renderer2);

  private elementRef = inject(ElementRef);

  constructor() {
    this.applyDefaultStyles();
  }

  private applyDefaultStyles() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'w-full');
    this.renderer2.addClass(this.elementRef.nativeElement, 'text-center');
    this.renderer2.addClass(this.elementRef.nativeElement, 'text-white');
  }
}
