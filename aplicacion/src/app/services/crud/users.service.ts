import { Injectable, resolveForwardRef } from '@angular/core';
import { User } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "https://jsonplaceholder.typicode.com/users"

  private usersCache: User[] = [];

  constructor() {
    this.fetchUsers().then(users => {
      this.usersCache = users;
    }
    )
  }

  async getUsers() {
    return new Promise<User[]>((resolve, reject) => {
      resolve(this.usersCache)
    })
  }

  getIndex(id: number) {
    return this.usersCache.findIndex(user => user.id === id);
  }

  private async fetchUsers() {
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
            // console.log(users)
          } else {
            throw new Error(response.statusText);
          }
        }
        catch (error) {
          throw new Error("Error fetching users")
        }
        resolve(users)
      }, 500);
    });
  }

  async getUser(id: number) {
    return new Promise<User>((resolve, reject) => {
      const user = this.usersCache.find(user => user.id === id);
      if (user) {
        resolve(user);
      }
      else {
        reject(new Error("User not found"));
      }
    });
  }

  async updateUser(user: User) {
    try {
      const response = await fetch(`${this.baseUrl}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user)
      })
      if (response.ok) {
        const result = (await response.json());
        const idx = this.getIndex(user.id);
        if (idx !== -1) {
          this.usersCache[idx] = { ...result };
          return this.usersCache[idx];
        }
        return { ...result };
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
        const idx = this.getIndex(id);
        if (idx !== -1) {
          this.usersCache.splice(idx, 1);
        }
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
