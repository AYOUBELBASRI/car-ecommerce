import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { DecimalPipe, NgClass, NgIf } from '@angular/common';
import { Car, CarDataService } from '../car-data.service';
import { BackButtonComponent } from '../shared/components/back-button/back-button';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, DecimalPipe, BackButtonComponent, NgClass, NgIf],
  templateUrl: './car-details.html',
  styleUrls: ['./car-details.css'],
})
export class CarDetails {
  carId: number | null = null;
  car: Car | undefined;
  currentMediaIndex: number = 0;
  carGalleryMedia: Array<{ type: 'image' | 'video', src: string }> = [];

  // Gallery media mapped by car make (strings will be auto-detected as image/video)
  private carGalleryMap: { [key: string]: string[] } = {
    'BMW': [
      'assets/bmw2.jpg',
      'assets/bmww.jpg',
      'assets/hoyoun-lee-IwYOxlzgH_M-unsplash.jpg',
      'assets/angelica-levshakowa-pYaboG7Rc1Y-unsplash.jpg',
      'assets/BMW.mp4',
    ],
    'Tesla': [
      'assets/tesla1.jpg',
    ],
    'Mercedes': [
      'assets/merc.jpg',
      'assets/téléchargement (3).jpg',
      'assets/aaron-huber-7Nsarl91394-unsplash.jpg',
      'assets/MERCEDES.mp4',

    ],
    'Ford': [
      'assets/mustang.jpg',

    ],
    'Range Rover': [
      'assets/new-range.jpg',
      'assets/raaaaaaaaaaange.jpg',

    ],
    'Audi': [
      'assets/audii.jpg',
      'assets/audirs7.jpg',
      'assets/omar-ramadan-oGKE0SkHEfQ-unsplash.jpg',
      'assets/AUDI.mp4',
    ],
    'Toyota': [
      'assets/toyota.jpg',
      'assets/dusty-barnes-ylDtLSP9J-Q-unsplash.jpg',
      "assets/Toyota Tacoma.jpg",
      'assets/TOYOTA.mp4',
    ],
    'Ford Mustang': [
      'assets/mustang.jpg',
      'assets/mustang2.jpg',
      'assets/mustang #carbonfiber #interior #s550.jpg',
    ],

  };


  constructor(
    private route: ActivatedRoute,
    private carData: CarDataService
  ) {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.carId = idParam ? Number(idParam) : null;
      this.car = this.carId ? this.carData.getCarById(this.carId) : undefined;
      this.loadCarGallery();
    });
  }

  private loadCarGallery(): void {
    if (this.car) {
      const raw = this.carGalleryMap[this.car.make] || [this.car.image];
      this.carGalleryMedia = raw.map(src => {
        const isVideo = /\.mp4$|\.webm$|\.ogg$/i.test(src);
        return { type: isVideo ? 'video' : 'image', src };
      });
      this.currentMediaIndex = 0;
    }
  }

  nextImage(): void {
    if (!this.carGalleryMedia.length) return;
    this.currentMediaIndex = (this.currentMediaIndex + 1) % this.carGalleryMedia.length;
  }

  prevImage(): void {
    if (!this.carGalleryMedia.length) return;
    this.currentMediaIndex = (this.currentMediaIndex - 1 + this.carGalleryMedia.length) % this.carGalleryMedia.length;
  }

  goToImage(index: number): void {
    this.currentMediaIndex = index;
  }
}

