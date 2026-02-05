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
import { AdminLoginComponent } from './admin/admin-login/admin-login';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { AdminCustomers } from './admin/admin-customers/admin-customers';
import { AdminProducts } from './admin/admin-products/admin-products';
import { AdminProductAdd } from './admin/admin-product-add/admin-product-add';
import { AdminOrders } from './admin/admin-orders/admin-orders';
import { AdminMessages } from './admin/admin-messages/admin-messages';
import { AdminSettings } from './admin/admin-settings/admin-settings';
import { PartsListComponent } from './parts/parts-list/parts-list';
import { PartDetailsComponent } from './parts/part-details/part-details';
import { CartComponent } from './cart/cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { AdminAuthGuard } from './admin/admin-auth/admin-auth.guard';
import { introRefreshGuard } from './intro/intro-refresh.guard';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  // Intro page without layout
  {
    path: 'intro',
    component: Intro
  },
  // Auth routes without layout
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
  // Admin routes without layout
  {
    path: 'admin',
    component: AdminLoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminLayout,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboard
      },
      {
        path: 'customers',
        component: AdminCustomers
      },
      {
        path: 'products',
        component: AdminProducts
      },
      {
        path: 'products/add',
        component: AdminProductAdd
      },
      {
        path: 'orders',
        component: AdminOrders
      },
      {
        path: 'messages',
        component: AdminMessages
      },
      {
        path: 'settings',
        component: AdminSettings
      }
    ]
  },
  // Public routes with main layout (navbar + footer)
  {
    path: '',
    component: MainLayout,
    canActivate: [introRefreshGuard],
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'cars',
        component: CarsListing
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
        path: 'contact-success',
        component: ContactSuccess
      },
      {
        path: 'parts',
        component: PartsListComponent
      },
      {
        path: 'parts/:id',
        component: PartDetailsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  }
];
