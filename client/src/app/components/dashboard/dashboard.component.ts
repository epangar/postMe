import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../styles/dashboard.scss']
})
export class DashboardComponent implements OnInit {
  
  currentlyManaging: string = "users";
  currentlyNotManaging: string = "tickets";

  constructor() { }

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
}
