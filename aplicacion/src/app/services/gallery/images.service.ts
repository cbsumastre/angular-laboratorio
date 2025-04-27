import { Injectable } from '@angular/core';
import { GalleryImage } from '../../model/gallery/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private images: GalleryImage[] = [
    {
      id: 1,
      src: 'assets/images/8ece5498-d069-4eda-b0bc-34fe88af2145.jpg',
      title: 'Imagen 1'
    },
    {
      id: 2,
      src: 'assets/images/17e79e41-f769-4d88-b7c2-e7f643706730.jpg',
      title: 'Imagen 2'
    },
    {
      id: 3,
      src: 'assets/images/286a9bd2-cb92-4fcb-bd06-34b879de2d79.jpg',
      title: 'Imagen 3'
    },
    {
      id: 4,
      src: 'assets/images/361d5eb4-ea3c-4b43-9ba5-2cf95de9190c.jpg',
      title: 'Imagen 4'
    },
    {
      id: 5,
      src: 'assets/images/938ddc34-f152-4bb4-8946-94747e0daf51.jpg',
      title: 'Imagen 5'
    },
    {
      id: 6,
      src: 'assets/images/b122309c-3794-43da-b5f6-f9d9c3cb0ed6.jpg',
      title: 'Imagen 6'
    },
    {
      id: 7,
      src: 'assets/images/bdb674ee-3ee4-4810-87bf-e2da9d1e6a94.jpg',
      title: 'Imagen 7'
    },
    {
      id: 8,
      src: 'assets/images/c117c456-2507-48b4-b2e9-9c5188892272.jpg',
      title: 'Imagen 8'
    },
    {
      id: 9,
      src: 'assets/images/c348bebf-a3a3-4d34-824b-9e65bc583936.jpg',
      title: 'Imagen 9'
    },
    {
      id: 10,
      src: 'assets/images/d2ae4e36-ea56-4da0-8bb1-34b270127f60.jpg',
      title: 'Imagen 10'
    },
    {
      id: 11,
      src: 'assets/images/d4d03720-57bc-4724-8c6b-e168d3c14eae.jpg',
      title: 'Imagen 11'
    },
    {
      id: 12,
      src: 'assets/images/ddd1e5e8-c609-44e2-b0d6-bc1c621d6d21.jpg',
      title: 'Imagen 12'
    },
    {
      id: 13,
      src: 'assets/images/e8c5c07e-525a-4424-a9f3-30fea2665cd4.jpg',
      title: 'Imagen 13'
    },
    {
      id: 14,
      src: 'assets/images/f1b82346-9859-470f-b71b-1b137148eead.jpg',
      title: 'Imagen 14'
    },
    {
      id: 15,
      src: 'assets/images/f731d829-20a1-42c7-bd8c-e0415862f8bf.jpg',
      title: 'Imagen 15'
    }
  ]

  constructor() { }

  getImages(): GalleryImage[] {
    return this.images;
  }


}
