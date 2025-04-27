import { Component } from '@angular/core';
import { PublicMenuComponent } from '../public/menu/menu.component';
import { PrivateMenuComponent } from '../private/menu/menu.component';
import { AuthService } from '../../auth/mock/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [PublicMenuComponent, PrivateMenuComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  isAuthenticated() {
    return this.authService.isLogged();
  }

}
