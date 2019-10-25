import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", redirectTo: "signin", pathMatch: 'full' },
  {path: "home", redirectTo: "signin", pathMatch: 'full'},
  {path: "signin", loadChildren: './components/access/access.module#AccessModule' },
  {path: "dashboard", loadChildren: './components/dashboard/dashboard.module#DashboardModule'},
  
  // {path: "home", component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
