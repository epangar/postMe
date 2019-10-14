import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



//Router
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
// import { CreatePersonsComponent } from './components/create-persons/create-persons.component';
// import { CreateTicketsComponent } from './components/create-tickets/create-tickets.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { DisplayTicketsComponent } from './components/display-tickets/display-tickets.component';
// import { DisplayPersonsComponent } from './components/display-persons/display-persons.component';
// import { LoginFormComponent } from './components/login-form/login-form.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { ManagePersonsComponent } from './components/manage-persons/manage-persons.component';
// import { TicketManagementComponent } from './components/ticket-management/ticket-management.component';

//Services
import { SessionService } from './services/session.service';
import { TicketService } from './services/ticket.service';
import { PersonService } from './services/person.service';


@NgModule({
  declarations: [
    AppComponent,
    // ManagePersonsComponent,
    // TicketManagementComponent,
    // DisplayPersonsComponent,
    // DisplayTicketsComponent,
    // CreatePersonsComponent,
    // CreateTicketsComponent,
    // SignUpComponent,
    // LoginFormComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule

  ],
  providers: [SessionService, TicketService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
