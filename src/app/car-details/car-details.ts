import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { DecimalPipe, NgClass } from '@angular/common';
import { Car, CarDataService } from '../car-data.service';
import { BackButtonComponent } from '../shared/components/back-button/back-button';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, DecimalPipe, BackButtonComponent, NgClass],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {
  carId: number | null = null;
  car: Car | undefined;
  currentImageIndex: number = 0;
  carGalleryImages: string[] = [];

  // Gallery images mapped by car make
  private carGalleryMap: { [key: string]: string[] } = {
    'BMW': [
      'assets/bmw2.jpg',
      'assets/bmww.jpg',
      'assets/hoyoun-lee-IwYOxlzgH_M-unsplash.jpg',
      'assets/angelica-levshakowa-pYaboG7Rc1Y-unsplash.jpg'
    ],
    'Tesla': [
      'assets/teslahero.jpg',
      'assets/tesla1.jpg'
    ],
    'Mercedes': [
      'assets/merc.jpg',
      'assets/vladislav-bychkov-zxptQM1zkb0-unsplash.jpg',
      'assets/benjamin-zhao-3TmD3RoBZ00-unsplash.jpg',
      'assets/aaron-huber-7Nsarl91394-unsplash.jpg',
      
    ],
    'Ford': [
      'assets/mustang.jpg',
      
    ],
    'Range Rover': [
      'assets/new-range.jpg',
     
    ],
    'Audi': [
      'assets/audii.jpg',
      
      'assets/omar-ramadan-oGKE0SkHEfQ-unsplash.jpg',
      'assets/audirs7.jpg',
    
    ],
    'toyota': [
      'assets/toyota1.jpg', 
      
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
      this.carGalleryImages = this.carGalleryMap[this.car.make] || [this.car.image];
      this.currentImageIndex = 0;
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carGalleryImages.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.carGalleryImages.length) % this.carGalleryImages.length;
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }
}

