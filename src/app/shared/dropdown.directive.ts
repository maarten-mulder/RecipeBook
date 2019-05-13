import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private toggled: boolean = false;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggle() {
    this.toggled = !this.toggled;
    if(this.toggled) {
      this.renderer.addClass(this.elRef.nativeElement, "open");
    }
    else {
      this.renderer.removeClass(this.elRef.nativeElement, "open");
    }
  }
}
