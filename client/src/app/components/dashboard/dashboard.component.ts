import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../styles/dashboard.scss']
})
export class DashboardComponent implements OnInit {
  
  currentlyManaging: string = "users";
  currentlyNotManaging: string = "tickets";
  currentUser = this.session.user;
  person: object;

  constructor(public session: SessionService, 
              public router: Router, 
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    
    if(!this.session.user){
      this.router.navigate(['/signin'])
    } else {
      this.route.params
      .subscribe((params)=>{
        debugger
        this.person = (params['id']);

      });
    }

    // debugger
    
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
    
  }
}
