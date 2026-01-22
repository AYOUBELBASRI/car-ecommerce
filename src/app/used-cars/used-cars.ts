import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car, CarDataService } from '../car-data.service';

@Component({
  selector: 'app-used-cars',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './used-cars.html',
  styleUrl: './used-cars.css',
})
export class UsedCars {
  cars: Car[];
  totalCars: number;

  constructor(private carData: CarDataService) {
    this.cars = this.carData.getUsedCars();
    this.totalCars = this.cars.length;
  }
}
