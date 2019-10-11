import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from '../access/access.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { SignUpComponent } from '../sign-up/sign-up.component';




const routes: Routes = [
  {
    path: "",
    component: AccessComponent,
    children : [
        {
            path: 'login',
            component: LoginFormComponent
          },
          {
            path: 'signup',
            component: SignUpComponent
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
