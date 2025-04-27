import { Injectable, resolveForwardRef } from '@angular/core';
import { User } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "https://jsonplaceholder.typicode.com/users"

  async getUsers() {
    //simula un retardo
    return new Promise<User[]>((resolve, reject) => {
      setTimeout(async () => {
        let users: User[] = [];
        try {
          const response = await fetch(this.baseUrl);
          console.log(response)
          if (response.ok) {
            const result = await response.json();
            users = [...result];
            console.log(users)
          }
        }
        catch (error) {
          console.error(error);
        }
        resolve(users)
      }, 500);
    });
  }

  async getUser(id: number) {
    let user;
    try {
      const response = await fetch(`${this.baseUrl}/${id}`)
      if (response.ok) {
        const result = await response.json();
        user = { ...result } as User
      }
    }
    catch (error) {
      console.error(error);
    }
    return user;
  }

  async postUser(user: User) {
    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        body: JSON.stringify(user)
      })
      if (response.ok) {
        const result = await response.json();
        const newUser = { ...result } as User

        return newUser;
      }
      else {
        throw new Error(response.statusText);
      }
    }
    catch (error) {
      console.error(error);
    }
    return undefined;
  }

  async updateUser(user: User) {
    try {
      const response = await fetch(`${this.baseUrl}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user)
      })
      if (response.ok) {
        const result = await response.json();
        return { ...result } as User
      }
      else {
        throw new Error(response.statusText);
      }
    }
    catch (error) {
      console.error(error);
    }
    return undefined;
  }

  async deleteUser(id: number) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        return true;
      }
      else {
        throw new Error(response.statusText);
      }
    }
    catch (error) {
      console.error(error);
    }
    return false;
  }
}
