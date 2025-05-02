import { Component } from '@angular/core';

import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ControlsComponent } from "./controls/controls.component";
import { ImageSelectedComponent } from "./image-selected/image-selected.component";

@Component({
  selector: 'app-gallery',
  imports: [ThumbnailsComponent, ControlsComponent, ImageSelectedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {}
