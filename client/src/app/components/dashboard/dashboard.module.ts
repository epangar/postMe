import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DisplayTicketsComponent } from '../display-tickets/display-tickets.component';
import { DisplayPersonsComponent } from '../display-persons/display-persons.component';
import { ManagePersonsComponent } from '../manage-persons/manage-persons.component';
import { TicketManagementComponent } from '../ticket-management/ticket-management.component';
import { CreateTicketsComponent } from '../create-tickets/create-tickets.component';
import { CreatePersonsComponent } from '../create-persons/create-persons.component';
import { EditPersonComponent } from '../edit-person/edit-person.component';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';

import { FormsModule }   from '@angular/forms';




@NgModule({
    imports: [CommonModule, DashboardRoutingModule, FormsModule],
    declarations: [
        DashboardComponent, 
        DisplayTicketsComponent, 
        DisplayPersonsComponent,
        ManagePersonsComponent,
        CreateTicketsComponent,
        CreatePersonsComponent,
        TicketManagementComponent, 
        EditPersonComponent,
        EditTicketComponent
    ]
  })
  export class DashboardModule {
      
  }