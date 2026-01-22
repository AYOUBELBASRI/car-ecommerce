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
  totalCars: number;

  constructor(private carData: CarDataService) {
    this.cars = this.carData.getAllCars();
    this.totalCars = this.cars.length;
  }
}
