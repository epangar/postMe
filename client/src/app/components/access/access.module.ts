import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessComponent } from '../access/access.component';
import { AccessRoutingModule } from '../access/access-routing.module';
import { LoginFormComponent } from '../login-form/login-form.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
    imports: [CommonModule, AccessRoutingModule, FormsModule],
    declarations: [AccessComponent, LoginFormComponent, SignUpComponent]
  })
  export class AccessModule {
      
  }