import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car, CarDataService } from '../car-data.service';

@Component({
  selector: 'app-new-cars',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './new-cars.html',
  styleUrl: './new-cars.css',
})
export class NewCars {
  cars: Car[];
  totalCars: number;

  constructor(private carData: CarDataService) {
    this.cars = this.carData.getNewCars();
    this.totalCars = this.cars.length;
  }
}
