import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // con este selector la directiva se aplica a cualquier elemento
  // selector: '[appRotate]'
  // con este selector la directiva solo se aplica a imágenes
  selector: 'img[appRotate]'
})
export class RotateDirective {

  @Input() step: number = 10;
  @Input() rotate: number = 0;


  constructor(private el: ElementRef) {
    this.onRotate();
  }

  @HostListener("click", ['$event'])
  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.rotate -= this.step;
    } else {
      this.rotate += this.step;
    }
    this.onRotate();
  }

  private onRotate() {
    (this.el.nativeElement as HTMLElement).style.transform = `rotate(${this.rotate}deg)`;
    (this.el.nativeElement as HTMLElement).style.transition = 'transform 0.3s ease-in-out';
  }

}
