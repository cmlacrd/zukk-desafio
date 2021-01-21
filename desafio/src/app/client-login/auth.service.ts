import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { User } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogin:boolean = false;

  constructor(private router:Router) { }

  signUp(user:User){

    if(user.name === 'admin' && user.password === '1234'){
        this.userLogin = true;
        this.router.navigate(['/clients']);
    }else{
      this.userLogin = false;
    }

  }
}
