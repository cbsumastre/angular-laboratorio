import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MenuPublicoComponent } from "./layout/menu-publico/menu-publico.component";
import { MenuPrivadoComponent } from "./layout/menu-privado/menu-privado.component";
import { AuthService } from './auth/mock/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuPublicoComponent,
    MenuPrivadoComponent,
    CommonModule,
    MenuPublicoComponent,
    MenuPrivadoComponent,
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
