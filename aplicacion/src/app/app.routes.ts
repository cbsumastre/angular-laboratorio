import { Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AboutComponent } from './components/public/about/about.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { CrudComponent } from './components/private/crud/user-list/user-list.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { GalleryComponent } from './components/private/gallery/gallery.component';
import { LoginRxJsComponent } from './components/public/login-rx-js/login-rx-js.component';

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
    path: "loginRxJs",
    component: LoginRxJsComponent
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
        path: "gallery",
        component: GalleryComponent
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

