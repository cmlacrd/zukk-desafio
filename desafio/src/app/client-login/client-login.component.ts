import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userInfo } from 'os';
import { AuthService } from './auth.service';
import { User } from './usuario';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  clientLogin = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.signUp(this.clientLogin.value);
  }

}
