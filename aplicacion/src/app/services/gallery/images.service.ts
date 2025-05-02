import { computed, Injectable, signal } from '@angular/core';
import { GalleryImage } from '../../model/gallery/image';
import { galleryImages } from './images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private images: GalleryImage[] = galleryImages

  private imageByIndex = (index: number) => this.images[index];

  private firstImage = computed(() => this.imageByIndex(0));
  private lastImage = computed(() => this.imageByIndex(this.images.length - 1));

  private selectedImage = signal<GalleryImage>(this.firstImage());
  isCurrentImageFirst = computed(() => this.selectedImage()?.id === this.firstImage()?.id);
  isCurrentImageLast = computed(() => this.selectedImage()?.id === this.lastImage()?.id);

  private currentIndex = computed(() => this.images.findIndex(image => image.id === this.selectedImage().id));

  private getNextImage = computed(() => {
    const nextIndex = (this.currentIndex() + 1) % this.images.length;
    return this.imageByIndex(nextIndex);
  });


  private getPreviousImage = computed(() => {
    const previousIndex = (this.currentIndex() - 1 + this.images.length) % this.images.length;
    return this.imageByIndex(previousIndex);
  });

  getImages(): GalleryImage[] {
    return this.images;
  }

  getSelectedImage(): GalleryImage {
    return this.selectedImage();
  }

  onPreviousImage() {
    this.setSelectedImage(this.getPreviousImage());
  }

  onNextImage() {
    this.setSelectedImage(this.getNextImage());
  }

  setSelectedImage(image: GalleryImage) {
    this.selectedImage.set(image);
  }

  isSelectedImage(image: GalleryImage) {
    return this.selectedImage()?.id === image.id;
  }
}
