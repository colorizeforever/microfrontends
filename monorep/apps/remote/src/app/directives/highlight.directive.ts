import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[highLightDirective]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = '#4b6285'
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = null;
  }


}
