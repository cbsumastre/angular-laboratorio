import { Component, Inject } from '@angular/core';
import { User } from '../../../model';

@Component({
  selector: 'app-user-edit',
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {

  @Inject
  user: User;

  constructor(private u: User) {
    this.user = u;
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
