import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../model';
import { UsersService } from '../../../services/crud/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {

  @Input()
  user: User | undefined;

  @Input()
  isEditingUser: boolean = false;

  @Output()
  saveEvent: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  cancelEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private usersService: UsersService) { }


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

  save(event: Event) {
    event.preventDefault();

    if (this.user) {
      this.usersService.updateUser(this.user).then(u => {
        console.log("new user", u);
        this.saveEvent.emit(this.user);
      });
    }
  }

  reset() {
    this.user = undefined;
  }

  closeModal() {
    this.cancelEvent.emit();
  }

}
