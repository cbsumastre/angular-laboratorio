import { Component } from '@angular/core';
import { UsersService } from '../../../../services/crud/users.service';
import { User } from '../../../../model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-crud',
  imports: [NgIf, NgFor, FormsModule,UserEditComponent,ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class CrudComponent {

  users: User[] = [];
  isLoading: boolean = false;
  isEditingUser: boolean = false;
  user: User | undefined;


  constructor(private usersService: UsersService) {
    this.isLoading = true;
    usersService.getUsers().then(data => this.users = data).finally(() => {
      this.isLoading = false;
    })
  }


  edit(u: User) {
    // console.log(u);
    this.user = u;
    this.isEditingUser = true;
    console.log(this.isEditingUser,this.user);
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

  updateUser(u: User) {
    this.isEditingUser = false;
    console.log("update user", u);
  }

  cancel() {
    this.isEditingUser = false;
  }
}
