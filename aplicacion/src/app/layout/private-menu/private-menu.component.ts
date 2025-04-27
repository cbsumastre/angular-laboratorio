import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/mock/auth.service';

@Component({
  selector: 'app-private-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss'
})
export class PrivateMenuComponent {

  @Input()
  username

  constructor(private authService: AuthService) {
    if (!authService.isLogged()) {
      authService.logout();
    } else {
      this.username = this.authService.getUsername()
    }
  }

  logout() {
    this.authService.logout();
  }

}
