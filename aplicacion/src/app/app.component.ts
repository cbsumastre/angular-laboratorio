import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from './services/auth/mock/auth.service';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PublicMenuComponent,
    PrivateMenuComponent,
    CommonModule,
    NgIf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mini-aplicacion';

  constructor(private authService:AuthService) {

  }

  isAuthenticated () {
    return this.authService.isLogged();
  }
}
