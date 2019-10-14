import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DisplayTicketsComponent } from '../display-tickets/display-tickets.component';
import { DisplayPersonsComponent } from '../display-persons/display-persons.component';
import { ManagePersonsComponent } from '../manage-persons/manage-persons.component';
import { TicketManagementComponent } from '../ticket-management/ticket-management.component';



const routes: Routes = [
    {
      path: "",
      component: DashboardComponent,
      children : [
            {
              path: 'display-tickets',
              component: DisplayTicketsComponent
            },
            {
              path: 'display-tickets',
              component: DisplayPersonsComponent
            },
            {
              path: 'manage-persons',
              component: ManagePersonsComponent
            },
            {
              path: 'manage-tickets',
              component: TicketManagementComponent
            }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }