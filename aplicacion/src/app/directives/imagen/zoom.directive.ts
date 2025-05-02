import { Directive,  ElementRef, HostListener } from '@angular/core';

import { ZoomService } from '../../services/imagen/zoom.service';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  private defaultScale: number | undefined;

  constructor(private el: ElementRef, private zoomService: ZoomService) {
    this.defaultScale = this.zoomService.zoomScale();
    this.applyZoom(this.defaultScale);
  }

  @HostListener("window:zoomIn")
  onZoomIn() {
    this.zoomService.zoomIn();
    this.applyZoom(this.zoomService.zoomScale());
  }

  @HostListener("window:zoomOut")
  onZoomOut() {
    this.zoomService.zoomOut();
    this.applyZoom(this.zoomService.zoomScale());
  }


  private applyZoom(scale: number) {
    (this.el.nativeElement as HTMLElement).style.transform = `scale(${scale})`;
    (this.el.nativeElement as HTMLElement).style.transition = 'transform 0.3s ease-in-out';
    (this.el.nativeElement as HTMLElement).style.transformOrigin = 'center center';
  }

}
