import { Component } from '@angular/core';
import { AuthData } from '../../../model';
import { AuthService } from '../../../services/auth/mock/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login-rx-js',
  imports: [FormsModule, NgIf],
  templateUrl: './login-rx-js.component.html',
  styleUrl: './login-rx-js.component.scss'
})
export class LoginRxJsComponent {
  isLoading: boolean;
  errorMessage: string;

  auth: AuthData;

  constructor(private authService: AuthService, private router: Router) {
    this.auth = {
      username: "",
      password: ""
    }
    this.isLoading = false;
    this.errorMessage = "";
    authService.removeAuth();
  }

  onChangeField() {
    this.errorMessage = "";
  }

  onSubmit(event: MouseEvent) {
    event.preventDefault();
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.loginObservable(this.auth).subscribe({
      next: (value) => {
        if (value) {
          this.errorMessage = "";
          this.router.navigate(['/private/dashboard']);
        }
        else {
          this.errorMessage = "Username y/o password incorrectos";
        }
      },
      error: (error) => this.errorMessage = error.message,
      complete: () => this.isLoading = false
    })
  }
}
