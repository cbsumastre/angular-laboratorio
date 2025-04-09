import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthData } from '../../model';
import { AuthService } from '../../auth/mock/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {
  @Input()
  isLoading = false;

  @Input()
  errorMessage = ""


  auth: AuthData;

  constructor(private authService: AuthService,private router:Router) {
    this.auth = {
      username: "",
      password: ""
    }
    authService.removeAuth();
  }

  onChangeField() {
    this.errorMessage = "";
  }

  onSubmit(event: MouseEvent) {
    event.preventDefault();

    try {
      this.isLoading = true;
      this.errorMessage = "";
      const loginOK = this.authService.login(this.auth)
      if (loginOK) {
        this.errorMessage = "";
        this.router.navigate(['/private/dashboard']);
      }
      else {
        this.errorMessage = "Username y/o password incorrectos";
      }
    }
    catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      }
    }
    finally {
      this.isLoading = false;
    }
  }


}
