import { Component, inject, OnDestroy, signal } from '@angular/core';
import { ImagesService } from '../../../services/gallery/images.service';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../../model/gallery/image';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnDestroy {

  imageService = inject(ImagesService);
  selectedImage = signal<GalleryImage>(this.getGalleryImages()[0]);
  private firstImage = signal<GalleryImage>(this.getGalleryImages()[0]);
  private lastImage = signal<GalleryImage>(this.getGalleryImages()[this.getGalleryImages().length - 1]);
  isPlaying = signal(false);
  playSubscription: Subscription | undefined;



  getGalleryImages() {
    return this.imageService.getImages();
  }

  trackByItems(index: number, item: GalleryImage) {
    return item.id;
  }

  onSelectImage(image: GalleryImage) {
    console.log("onSelectImage", image);
    this.selectedImage.set(image);
  }

  onPreviousImage() {
    this.selectedImage.set(this.getPreviousImage());
  }

  onNextImage() {
    this.selectedImage.set(this.getNextImage());
  }

  onPlay() {
    if (!this.isPlaying())
      this.isPlaying.set(true);
    this.playSubscription = interval(2000).subscribe(() => {
      this.selectedImage.set(this.getNextImage());
    });
  }

  onStop() {
    if (this.isPlaying()) {
      this.isPlaying.set(false);
      if (this.playSubscription) {
        this.playSubscription.unsubscribe();
      }
    }
  }

  private getNextImage() {
    const currentIndex = this.getGalleryImages().findIndex(image => image.id === this.selectedImage().id);
    const nextIndex = (currentIndex + 1) % this.getGalleryImages().length;
    return this.getGalleryImages()[nextIndex];
  }

  private getPreviousImage() {
    const currentIndex = this.getGalleryImages().findIndex(image => image.id === this.selectedImage().id);
    const previousIndex = (currentIndex - 1 + this.getGalleryImages().length) % this.getGalleryImages().length;
    return this.getGalleryImages()[previousIndex];
  }

  isCurrentImageFirst() {
    return  this.selectedImage()?.id === this.firstImage()?.id;
  }

  isCurrentImageLast() {
    return  this.selectedImage()?.id === this.lastImage()?.id;
  }

  isSelectedImage(image: GalleryImage) {
    return this.selectedImage()?.id === image.id;
  }

  ngOnDestroy(): void {
    this.onStop();
  }



}
