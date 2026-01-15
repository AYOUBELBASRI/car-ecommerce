import { Routes } from '@angular/router';
import { CarsListing } from './cars-listing/cars-listing';
import { Home } from './home/home';
import { SignIn } from './signin/signin';
import { SignUp } from './signup/signup';
import { UsedCars } from './used-cars/used-cars';
import { NewCars } from './new-cars/new-cars';
import { SellCar } from './sell-car/sell-car';
import { Financing } from './financing/financing';
import { Reviews } from './reviews/reviews';
import { HowItWorks } from './how-it-works/how-it-works';
import { CarDetails } from './car-details/car-details';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'cars',
    component: CarsListing
  },
  {
    path: 'signin',
    component: SignIn
  },
  {
    path: 'signup',
    component: SignUp
  },
  {
    path: 'used-cars',
    component: UsedCars
  },
  {
    path: 'new-cars',
    component: NewCars
  },
  {
    path: 'sell-car',
    component: SellCar
  },
  {
    path: 'financing',
    component: Financing
  },
  {
    path: 'reviews',
    component: Reviews
  },
  {
    path: 'how-it-works',
    component: HowItWorks
  },
  {
    path: 'car/:id',
    component: CarDetails
  }
];
