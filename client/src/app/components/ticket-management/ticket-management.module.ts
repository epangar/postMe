import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateTicketsComponent } from '../create-tickets/create-tickets.component'
import { TicketManagementComponent } from '../ticket-management/ticket-management.component';
import { ManageTicketsRoutingModule } from '../ticket-management/ticket-management-routing.module';


import { FormsModule }   from '@angular/forms';



@NgModule({
    imports: [CommonModule, ManageTicketsRoutingModule, FormsModule],
    declarations: [TicketManagementComponent, CreateTicketsComponent]
  })
  export class ManageTicketsModule {
      
  }