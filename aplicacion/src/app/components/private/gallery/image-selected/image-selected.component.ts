import { Component, inject } from '@angular/core';

import { ImagesService } from '../../../../services/gallery/images.service';

@Component({
  selector: 'app-image-selected',
  imports: [],
  templateUrl: './image-selected.component.html',
  styleUrl: './image-selected.component.scss'
})
export class ImageSelectedComponent {

  imageService = inject(ImagesService)

}
