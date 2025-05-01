import { Injectable } from '@angular/core';
import { GalleryImage } from '../../model/gallery/image';
import { galleryImages } from './images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private images: GalleryImage[] = galleryImages

  constructor() { }

  getImages(): GalleryImage[] {
    return this.images;
  }


}
