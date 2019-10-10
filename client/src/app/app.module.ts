import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


//Router
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { AccessComponent } from './components/access/access.component';
import { TicketmanagementComponent } from './components/ticketmanagement/ticketmanagement.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { DisplayTicketsComponent } from './components/display-tickets/display-tickets.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { CreateTicketsComponent } from './components/create-tickets/create-tickets.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

//Services
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    AppComponent,
    ManageusersComponent,
    AccessComponent,
    TicketmanagementComponent,
    DisplayUsersComponent,
    DisplayTicketsComponent,
    CreateUsersComponent,
    CreateTicketsComponent,
    SignUpComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
