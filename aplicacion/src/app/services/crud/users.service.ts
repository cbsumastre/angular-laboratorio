import { Injectable } from '@angular/core';
import { UserAPI, UserVM, temporaryId } from "./../../model"
import { mapUsersFromAPIToVM, mapUserVMToAPI } from '../../model/users/mapper';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "https://jsonplaceholder.typicode.com/users"

  private usersCache: UserVM[] = [];

  constructor() {
    this.fetchUsers().then(users => {
      this.usersCache = users
    })
  }

  async getUsers() {
    return new Promise<UserVM[]>((resolve, reject) => {
      resolve(this.usersCache)
    })
  }

  getIndex(id: number) {
    return this.usersCache.findIndex(user => user.id === id);
  }

  private async fetchUsers(): Promise<UserVM[]> {
    //simula un retardo
    return new Promise<UserVM[]>((resolve, reject) => {
      setTimeout(async () => {
        let users: UserAPI[] = [];
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
        resolve(mapUsersFromAPIToVM(users));
      }, 500);
    });
  }

  async getUser(id: number): Promise<UserVM> {
    return new Promise<UserVM>((resolve, reject) => {
      const user = this.usersCache.find(user => user.id === id);
      if (user) {
        resolve(user);
      }
      else {
        reject(new Error("User not found"));
      }
    });
  }

  async postUser(user: UserVM): Promise<UserVM | undefined> {
    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        body: JSON.stringify(mapUserVMToAPI(user))
      })
      if (response.ok) {
        const { id } = await response.json()
        const newUser = { ...user, id }
        this.usersCache.unshift(newUser);
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

  async updateUser(user: UserVM): Promise<UserVM | undefined> {
    if (user.id === temporaryId) {
      return this.postUser(user);
    }

    try {
      const response = await fetch(`${this.baseUrl}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(mapUserVMToAPI(user))
      })
      if (response.ok) {
        const { id } = await response.json();
        const idx = this.getIndex(id);
        if (idx !== -1) {
          this.usersCache[idx] = { ...user, id };
          return this.usersCache[idx];
        }
        return { ...user };
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

  async deleteUser(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        this.usersCache = this.usersCache.filter(user => user.id !== id);
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
