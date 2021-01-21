import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Client {
  id: number,
  name: string,
  phone: string,
  address: string,
  uf: string,
  email: string,
  city: string,
  neighborhood: string
}

const urlServer = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  listClients(){
    return this.http.get<Client[]>(`${urlServer}/clients`);
  }

  returnClient(id: number){
    return this.http.get<Client>(`${urlServer}/clients/${id}`);
  }

  createClient(client: Client){
    return this.http.post<Client>(`${urlServer}/clients`, client);
  }

  updateClient(client: Client){
    return this.http.put<Client>(`${urlServer}/clients/${client.id}`, client);
  }

  deleteClients(id: number){
    return this.http.delete<Client>(`${urlServer}/clients/${id}`);
  }

}
