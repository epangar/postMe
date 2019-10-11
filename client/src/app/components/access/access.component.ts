import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
/* import { PersonService } from '../../services/user.service'*/
import { SessionService } from 'src/app/services/session.service'; 

@Component({
  selector: 'access',
  templateUrl: './access.component.html',
  styleUrls: ['../../styles/access.scss']
})
export class AccessComponent implements OnInit {

  // accessIsClicked: boolean=false;
  signUpIsSelected: boolean=false;
  user: any;
  

  constructor(
    //private PersonService:PersonService, 
    //private session: Session 
    ) { }

  ngOnInit() {
    
  }



  // clickAccess(){
  //   this.accessIsClicked=!this.accessIsClicked;
  // }

  // clickUsers(){
  //   // this.manage-persons=!this.manage-persons;
    
  //   if(this.currentlyManaging === "users"){
  //     this.currentlyManaging = "tickets";
  //     this.currentlyNotManaging = "users";

  //   } else {
  //     this.currentlyNotManaging = "tickets";
  //     this.currentlyManaging = "users";
  //   }
  // }

  

  receiveLoggedUser(input: any){
    
  }
}
