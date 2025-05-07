import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../../services/crud/users.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, temporaryId } from '../../../../model/users/view-model';

@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {

  @Input()
  user: User | undefined;

  @Input()
  isEditingUser: boolean = false;

  @Output()
  saveEvent: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  cancelEvent: EventEmitter<void> = new EventEmitter<void>();

  userForm: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.minLength(9)],
      website: ["", Validators.pattern(/^(http|https):\/\/[^ "]+$/)]
    })
  }

  ngOnInit() {
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        website: this.user.website
      });
    }
  }



  save(event: Event) {
    event.preventDefault();
    if (this.userForm.valid) {
      const updatedUser: User = {
        id: this.user ? this.user.id : temporaryId,
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        phone: this.userForm.value.phone,
        website: this.userForm.value.website
      };

      this.usersService.updateUser(updatedUser).then(u => {
        console.log("new user", u);
        this.user = undefined;
        this.saveEvent.emit();
      });
    } else {
      console.error("Form is invalid", this.userForm.errors);
    }
  }

  reset() {
    this.userForm.patchValue({
      name: "",
      email: "",
      phone: "",
      website: ""
    });
  }


  // changeName(event: Event) {
  //   if (this.user) {
  //     this.user.name = (event.target as HTMLInputElement).value
  //   }
  // }

  // changeEmail(event: Event) {
  //   if (this.user) {
  //     this.user.email = (event.target as HTMLInputElement).value
  //   }
  // }

  // changePhone(event: Event) {
  //   if (this.user) {
  //     this.user.phone = (event.target as HTMLInputElement).value
  //   }
  // }

  // changeWebsite(event: Event) {
  //   if (this.user) {
  //     this.user.website = (event.target as HTMLInputElement).value
  //   }
  // }

  // save(event: Event) {
  //   event.preventDefault();
  //   if (this.user) {
  //     this.usersService.updateUser(this.user).then(u => {
  //       console.log("new user", u);
  //       this.saveEvent.emit();
  //     });
  //   }
  // }

  // reset() {
  //   this.user = undefined;
  // }

  closeModal() {
    this.user = undefined;
    this.cancelEvent.emit();
  }

}
