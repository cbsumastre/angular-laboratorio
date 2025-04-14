import { Component } from '@angular/core';
import { UsersService } from '../../../services/crud/users.service';
import { User } from '../../../model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-crud',
  imports: [NgIf, NgFor, FormsModule,UserEditComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class CrudComponent {

  users: User[] = [];
  isLoading: boolean = false;
  editUser: boolean = false;
  user: User | undefined;


  constructor(private usersService: UsersService) {
    this.isLoading = true;
    usersService.getUsers().then(data => this.users = data).finally(() => {
      this.isLoading = false;
    })
  }

  edit(u:User) {
    this.editUser = true;
    this.user=u;
  }

  delete(id: number) {
    this.usersService.deleteUser(id).then(resp => {
      if (resp) {
        this.users = this.users.filter(user => user.id !== id)
      }
    })

  }

  trackByItems(index: number, item: User) {
    return item.id;
  }

  changeName(event: Event) {
    if (this.user) {
      this.user.name = (event.target as HTMLInputElement).value
    }
  }

  changeEmail(event: Event) {
    if (this.user) {
      this.user.email = (event.target as HTMLInputElement).value
    }
  }

  changePhone(event: Event) {
    if (this.user) {
      this.user.phone = (event.target as HTMLInputElement).value
    }
  }

  changeWebsite(event: Event) {
    if (this.user) {
      this.user.website = (event.target as HTMLInputElement).value
    }
  }

  save(event: MouseEvent) {
    event.preventDefault();
    this.editUser = false;
    if (this.user) {
      this.usersService.updateUser(this.user).then(u => {
        console.log(JSON.stringify(u));
        const idx = this.users.findIndex(u => u.id === this.user?.id)
        if (idx >= 0 && this.user) {
          this.users[idx] = this.user;
        }
      });
    }
  }

  reset() {
    this.editUser = false;
    this.user = undefined;
  }

}
