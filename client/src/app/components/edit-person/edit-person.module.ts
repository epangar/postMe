import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditPersonRoutingModule } from './edit-person-routing.module';

import { EditPersonComponent } from '../edit-person/edit-person.component';

import { FormsModule }   from '@angular/forms';




@NgModule({
    imports: [CommonModule, EditPersonRoutingModule, FormsModule],
    declarations: [
        
        EditPersonComponent,
        
    ]
  })
  export class EditPersonModule {
      
  }