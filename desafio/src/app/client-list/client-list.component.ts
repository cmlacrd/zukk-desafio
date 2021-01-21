import { Component, OnInit } from '@angular/core';
import { Client,ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.listClients().subscribe(clients => {
      this.clients = clients
    })
  }

  deleteClient(client: Client){
    this.clientsService.deleteClients(client.id).subscribe(() =>{
      const index = this.clients.indexOf(client);
      this.clients.splice(index,1);
    })
  }

}
