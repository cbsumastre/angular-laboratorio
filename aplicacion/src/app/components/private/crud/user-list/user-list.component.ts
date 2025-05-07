import { Component, OnInit, signal } from '@angular/core';
import { UsersService } from '../../../../services/crud/users.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { temporaryId, User } from '../../../../model/users/view-model';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, FormsModule, UserEditComponent, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class CrudComponent implements OnInit {

  users = signal<User[]>([]);
  isLoading = signal(false);
  isEditingUser = signal(false);
  user = signal<User | undefined>(undefined);


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.isLoading.set(true);
    this.usersService.getUsers().then(data => this.users.set(data)).finally(() => {
      this.isLoading.set(false);
    })
  }


  edit(u: User) {
    // console.log(u);
    this.user.set({ ...u });
    this.isEditingUser.set(true);
    console.log(this.isEditingUser(), this.user());
  }

  newUser() {
    this.user.set({
      id: temporaryId,
      name: "",
      email: "",
      phone: "",
      website: "",
    })
    this.isEditingUser.set(true);
    console.log(this.isEditingUser(), this.user());
  }



  delete(id: number) {
    this.usersService.deleteUser(id).then(resp => {
      if (resp) {
        this.users.update(currentValue => currentValue.filter(user => user.id !== id))
      }
    })
  }

  trackByItems(index: number, item: User) {
    return item.id;
  }

  finishUserUpdate() {
    this.user.set(undefined)
    this.isEditingUser.set(false);
  }
}
