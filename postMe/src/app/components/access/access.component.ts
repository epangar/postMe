import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
/* import { UserService } from '../../services/user.service'
import { SessionService } from 'src/app/services/session.service'; */

@Component({
  selector: 'access',
  templateUrl: './access.component.html',
  styleUrls: ['../../styles/access.scss']
})
export class AccessComponent implements OnInit {

  accessIsClicked: boolean=false;
  signUpIsSelected: boolean=false;
  currentlyManaging: string = "users";
  currentlyNotManaging: string = "tickets";
  

  constructor(
    //private UserService:UserService, 
    //private sessionService: SessionService 
    ) { }

  ngOnInit() {
    
  }



  clickAccess(){
    this.accessIsClicked=!this.accessIsClicked;
  }

  clickUsers(){
    // this.manageUsers=!this.manageUsers;
    
    if(this.currentlyManaging === "users"){
      this.currentlyManaging = "tickets";
      this.currentlyNotManaging = "users";

    } else {
      this.currentlyNotManaging = "tickets";
      this.currentlyManaging = "users";
    }
  }

  showSignUp(){
    this.signUpIsSelected=!this.signUpIsSelected;
  }
}
