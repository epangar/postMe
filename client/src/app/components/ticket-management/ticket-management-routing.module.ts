import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketsComponent } from '../create-tickets/create-tickets.component';
import { TicketManagementComponent } from './ticket-management.component';


const routes: Routes = [
  {
    path: "",
    component: TicketManagementComponent,
    children: [
      {
        path: "",
        component: CreateTicketsComponent,
      }
    ]
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ManageTicketsRoutingModule { }