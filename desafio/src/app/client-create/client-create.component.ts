import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../client-login/auth.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {



  clientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private clientsService: ClientsService, private router:Router) { }



  createClient(): void {
    this.clientsService.createClient(this.clientForm.value).subscribe(client => {
      this.router.navigate(['/clients']);
    });
  }

}
