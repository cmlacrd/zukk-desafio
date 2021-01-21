import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../clients.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../client-login/auth.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id!: number;
  
  clientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(private clientsService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'));
      this.clientsService.returnClient(this.id).subscribe(client => {
        this.clientForm.reset(client);
      });
    });
  }

  updateContact(){
    this.clientsService.updateClient({id: this.id, ...this.clientForm.value})
      .subscribe(client => {
        this.clientForm.reset(client);
      });
  }

}
