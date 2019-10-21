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
  //private currentUserID: Number;

  constructor(public session: SessionService, 
              public router: Router, 
              //private activatedroute: ActivatedRoute
              ) { }

  ngOnInit() {
    
    if(!this.session.user){
      this.router.navigate(['/signin'])
    }

    // debugger
    // this.activatedroute.params
    //   .subscribe((params)=>{

    //     this.currentUserID = Number(params['id']);

    //   });
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
