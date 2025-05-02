import { Component, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

import { ImagesService } from '../../../../services/gallery/images.service';


@Component({
  selector: 'app-controls',
  imports: [CommonModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent implements OnDestroy {

  imageService = inject(ImagesService);

  isPlaying = signal(false);
  playSubscription: Subscription | undefined;

  onPlay() {
      if (!this.isPlaying()) {
        this.isPlaying.set(true);
        this.playSubscription = interval(2000).subscribe(() => {
         this.imageService.onNextImage()
        });
      }
    }

    onStop() {
      if (this.isPlaying()) {
        this.isPlaying.set(false);
        if (this.playSubscription) {
          this.playSubscription.unsubscribe();
        }
      }
    }


  ngOnDestroy(): void {
    this.onStop();
  }

}
