import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/mock/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  @Input()
  username


  constructor(private authService:AuthService ){
    this.username=authService!.getUsername();
  }

}
