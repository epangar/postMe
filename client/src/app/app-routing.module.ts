import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccessComponent } from './components/access/access.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: "", redirectTo: "signin", pathMatch: 'full' },
  //{path: "signin", component: AccessComponent },
  {path: "signin", loadChildren: './components/access/access.module#AccessModule' },
  {path: "home", redirectTo: "signin", pathMatch: 'full'},
  {path: "dashboard/:id", component: DashboardComponent},
  
  // {path: "home", component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
