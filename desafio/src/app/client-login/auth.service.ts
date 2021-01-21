import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogin:boolean = false;
  showPage: EventEmitter<boolean> = new EventEmitter();


  constructor(private router:Router) { }

  signUp(user:User){

    if(user.name === 'admin' && user.password === '1234'){
        this.userLogin = true;
        this.router.navigate(['/clients']);
    }else{
      this.userLogin = false;
      this.router.navigate(['/login']);
    }

  }
}
