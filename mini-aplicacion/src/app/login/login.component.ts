import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Login } from '../model/login';
import { login } from '../auth/mock/auth.mock.service';



@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  @Input()
  isLoading = false;

  @Input()
  errorMessage = ""


  dataLogin: Login;


  constructor() {
    this.dataLogin = {
      username: "",
      password: ""
    }
  }

  onChangeField () {
    this.errorMessage="";
  }

  onSubmit(event: MouseEvent) {
    event.preventDefault();

    try {
      this.isLoading = true;
      this.errorMessage = "";
      const loginOK = login(this.dataLogin)
      if (loginOK) {
        this.errorMessage = "";
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
