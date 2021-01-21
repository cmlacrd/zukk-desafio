import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientUpdateComponent } from './client-update/client-update.component';

const routes: Routes = [
    {path: 'login', component: ClientLoginComponent},
    {path: 'clients', component: ClientListComponent},
    {path: 'clients/create', component: ClientCreateComponent},
    {path: 'clients/:id', component: ClientUpdateComponent},
    {path: '', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
