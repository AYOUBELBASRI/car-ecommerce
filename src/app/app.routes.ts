import { Routes } from '@angular/router';
import { CarsListing } from './cars-listing/cars-listing';
import { Home } from './home/home';
import { SignIn } from './signin/signin';
import { SignUp } from './signup/signup';
import { SellCar } from './sell-car/sell-car';
import { Financing } from './financing/financing';
import { FinancingResult } from './financing-result/financing-result';
import { Reviews } from './reviews/reviews';
import { HowItWorks } from './how-it-works/how-it-works';
import { CarDetails } from './car-details/car-details';
import { User } from './user/user';
import { SigninSuccess } from './signin-success/signin-success';
import { Intro } from './intro/intro';
import { ContactSuccess } from './contact-success/contact-success';
import { introRefreshGuard } from './intro/intro-refresh.guard';

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
    component: Home,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'cars',
    component: CarsListing,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'signin',
    component: SignIn,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'signin-success',
    component: SigninSuccess,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'signup',
    component: SignUp,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'sell-car',
    component: SellCar,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'financing',
    component: Financing,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'financing-result',
    component: FinancingResult,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'reviews',
    component: Reviews,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'how-it-works',
    component: HowItWorks,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'car/:id',
    component: CarDetails,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'contact-seller',
    component: User,
    canActivate: [introRefreshGuard]
  },
  {
    path: 'contact-success',
    component: ContactSuccess,
    canActivate: [introRefreshGuard]

  }
];
