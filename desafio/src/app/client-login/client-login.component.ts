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

  message:string = 'Usuário e/ou senha incorretos!';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void{
    const form = this.clientLogin.value;
    if(form.name != 'admin' && form.password != '1234'){
      this.message = "Usuário ou senha pode estar errado!"; 
    }
    this.authService.signUp(this.clientLogin.value);
  }

}
