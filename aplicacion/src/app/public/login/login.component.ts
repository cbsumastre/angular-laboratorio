import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthData } from '../../model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/mock/auth.service';



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
  isLoading:boolean;
  errorMessage:string;

  auth: AuthData;

  constructor(private authService: AuthService,private router:Router) {
    this.auth = {
      username: "",
      password: ""
    }
    this.isLoading=false;
    this.errorMessage="";
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
