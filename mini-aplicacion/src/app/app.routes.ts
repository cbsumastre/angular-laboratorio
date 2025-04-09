import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { GaleriaComponent } from './private/galeria/galeria.component';
import { CrudComponent } from './private/crud/crud.component';
import { ProfileComponent } from './private/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "private",
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: "galeria",
        component: GaleriaComponent
      },
      {
        path: "crud",
        component: CrudComponent,
      },
      {
        path: "profile",
        component: ProfileComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

