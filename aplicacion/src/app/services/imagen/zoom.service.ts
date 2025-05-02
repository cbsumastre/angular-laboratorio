import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  zoomScale = signal(1);
  zoomStep = 0.25;
  minZoom = 0.5;
  maxZoom = 1.5;

  zoomIn() {
    this.zoomScale.update((currentValue) => {
      const newValue = currentValue + this.zoomStep;
      return newValue > this.maxZoom ? this.maxZoom : newValue;
     });
  }

  zoomOut() {
    this.zoomScale.update((currentValue) => {
      const newValue = currentValue - this.zoomStep;
      return newValue < this.minZoom ? this.minZoom : newValue;
     });
  }
}
