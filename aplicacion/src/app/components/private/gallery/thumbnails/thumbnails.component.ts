import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { GalleryImage } from '../../../../model/gallery/image';
import { ImagesService } from '../../../../services/gallery/images.service';

@Component({
  selector: 'app-thumbnails',
  imports: [CommonModule],
  templateUrl: './thumbnails.component.html',
  styleUrl: './thumbnails.component.scss'
})
export class ThumbnailsComponent {

  imageService = inject(ImagesService);

  trackByItems(index: number, item: GalleryImage) {
    return item.id;
  }



}
