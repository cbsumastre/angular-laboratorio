import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/mock/auth.service';

@Component({
  selector: 'app-menu-privado',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-privado.component.html',
  styleUrl: './menu-privado.component.scss'
})
export class MenuPrivadoComponent {

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
