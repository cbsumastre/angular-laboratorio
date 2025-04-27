import { Component, inject } from '@angular/core';
import { ImagesService } from '../../../services/gallery/images.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  imageService = inject(ImagesService);

  getGalleryImages() {
    return this.imageService.getImages();
  }

}
