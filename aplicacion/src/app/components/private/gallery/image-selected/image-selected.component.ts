import { Component, inject } from '@angular/core';

import { ImagesService } from '../../../../services/gallery/images.service';
import { ZoomDirective } from '../../../../directives/imagen/zoom.directive';

@Component({
  selector: 'app-image-selected',
  imports: [ZoomDirective],
  templateUrl: './image-selected.component.html',
  styleUrl: './image-selected.component.scss'
})
export class ImageSelectedComponent {

  imageService = inject(ImagesService)

}
