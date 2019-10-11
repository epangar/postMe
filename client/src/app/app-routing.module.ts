import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccessComponent } from './components/access/access.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionService } from './services/session.service'


const routes: Routes = [
  {path: "", redirectTo: "signin", pathMatch: 'full' },
  {path: "signin", component: AccessComponent},
  {path: "home", component: AppComponent},
  {path: "dashboard/:id", component: DashboardComponent},
  
  // {path: "home", component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
