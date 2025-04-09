import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthData } from '../../model';
import { Store } from '../../model/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mockUser: AuthData = {
    username: "master@lemoncode.net",
    password: "12345678"
  }

  private KEY_LOCALSTORAGE = "mini-aplicacion-auth"


  constructor(private router: Router) {
  }

  login(data: AuthData): boolean {
    let auth = false;
    if (data) {
      auth = data.username === this.mockUser.username && data.password === this.mockUser.password;
      if (auth) {
        console.log("Login successful");
        const store: Store = {
          isAuth: true,
          username: data.username
        }
        localStorage.setItem(this.KEY_LOCALSTORAGE, JSON.stringify(store))
        // this.router.navigate(['/private/dashboard']);
      }
    }
    return auth;
  }

  logout() {
    console.log("Logout");
    this.removeAuth();
    this.router.navigate(['/login'])
  }

  removeAuth() {
    localStorage.removeItem(this.KEY_LOCALSTORAGE);
  }

  private getAuth(): Store | undefined {
    const data = localStorage.getItem(this.KEY_LOCALSTORAGE)
    if (data) {
      console.log("data", data);
      const auth = JSON.parse(data) as Store
      console.log("auth", auth, auth && auth.isAuth);
      return auth
    }
    return undefined;
  }

  isLogged(): boolean {
    const auth = this.getAuth();
    if (!auth) {
      return false;
    }
    return auth.isAuth;
  }

  getUsername():string {
    const auth = this.getAuth();
    return auth?.username || ""
  }
}
