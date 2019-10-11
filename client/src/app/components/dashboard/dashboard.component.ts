import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../styles/dashboard.scss']
})
export class DashboardComponent implements OnInit {
  
  currentlyManaging: string = "users";
  currentlyNotManaging: string = "tickets";

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  clickUsers(){
    
    if(this.currentlyManaging === "users"){
      this.currentlyManaging = "tickets";
      this.currentlyNotManaging = "users";

    } else {
      this.currentlyNotManaging = "tickets";
      this.currentlyManaging = "users";
    }
  }

  logOut = () => {
    this.session.logOut()
    debugger
  }
}
