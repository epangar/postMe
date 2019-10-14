import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePersonsComponent } from '../manage-persons/manage-persons.component';
import { CreatePersonsComponent } from '../create-persons/create-persons.component'; 


const routes: Routes = [
    {
      path: "",
      component: ManagePersonsComponent,
      children: [
        {
          path: "",
          component: CreatePersonsComponent,
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ManagePersonsRoutingModule { }