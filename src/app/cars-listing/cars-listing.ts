import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Car, CarDataService } from '../car-data.service';

@Component({
  selector: 'app-cars-listing',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cars-listing.html',
  styleUrl: './cars-listing.css',
})
export class CarsListing {
  cars: Car[];

  constructor(private carData: CarDataService) {
    // Get all cars from the service
    this.cars = this.carData.getUsedCars().concat(this.carData.getNewCars());
  }

  get totalCars(): number {
    return this.cars.length;
  }
}
