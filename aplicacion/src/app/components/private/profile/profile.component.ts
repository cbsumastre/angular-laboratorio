import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/mock/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  @Input()
  username: string | undefined


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService!.getUsername();
  }

}
