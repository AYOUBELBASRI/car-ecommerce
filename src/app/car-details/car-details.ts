import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Car, CarDataService } from '../car-data.service';
import { BackButtonComponent } from '../shared/components/back-button/back-button';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, DecimalPipe, BackButtonComponent],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {
  carId: number | null = null;
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private carData: CarDataService
  ) {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.carId = idParam ? Number(idParam) : null;
      this.car = this.carId ? this.carData.getCarById(this.carId) : undefined;
    });
  }
}

