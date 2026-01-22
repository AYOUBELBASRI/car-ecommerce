import { Routes } from '@angular/router';
import { CarsListing } from './cars-listing/cars-listing';
import { Home } from './home/home';
import { SignIn } from './signin/signin';
import { SignUp } from './signup/signup';
import { UsedCars } from './used-cars/used-cars';
import { NewCars } from './new-cars/new-cars';
import { SellCar } from './sell-car/sell-car';
import { Financing } from './financing/financing';
import { FinancingResult } from './financing-result/financing-result';
import { Reviews } from './reviews/reviews';
import { HowItWorks } from './how-it-works/how-it-works';
import { CarDetails } from './car-details/car-details';
import { User } from './user/user';
import { SigninSuccess } from './signin-success/signin-success';
<<<<<<< HEAD
import { ContactSellerSuccess } from './contact-seller-success/contact-seller-success';
=======
import { Intro } from './intro/intro';
>>>>>>> 3736e26c614cb0144f37efc371ce13d7b445a102

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    component: Intro
  },
  {
    path: 'home',
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
    path: 'signin-success',
    component: SigninSuccess
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
    path: 'financing-result',
    component: FinancingResult
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
  },
  {
    path: 'contact-seller',
    component: User
  },
  {
    path: 'contact-seller-success',
    component: ContactSellerSuccess
  }
];
