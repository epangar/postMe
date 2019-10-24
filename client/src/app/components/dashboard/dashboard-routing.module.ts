import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DisplayTicketsComponent } from '../display-tickets/display-tickets.component';
import { DisplayPersonsComponent } from '../display-persons/display-persons.component';



const routes: Routes = [
    {
      path: "",
      component: DashboardComponent,
      children : [
            {
              path: '',
              component: DisplayTicketsComponent
            },
            {
              path: '',
              component: DisplayPersonsComponent,
            }
            
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }