import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPersonComponent } from '../edit-person/edit-person.component';

const routes: Routes =[
    {
        path: '/:id',
        component: EditPersonComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class EditPersonRoutingModule{}