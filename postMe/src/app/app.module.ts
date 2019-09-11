import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { AccessComponent } from './components/access/access.component';
import { TicketmanagementComponent } from './components/ticketmanagement/ticketmanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageusersComponent,
    AccessComponent,
    TicketmanagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
