import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'access',
  templateUrl: './access.component.html',
  styleUrls: ['../../styles/access.scss']
})
export class AccessComponent implements OnInit {

  // accessIsClicked: boolean=false;
  signUpIsSelected: boolean=false;
  currentUser: object;
  

  constructor(
    //private PersonService:PersonService, 
    private session: SessionService,
    private router: Router 
    ) { }

  ngOnInit() {
    if(!this.currentUser){
      // debugger
      setTimeout(()=>console.clear(), 2000)
    } else{
      console.log(this.currentUser)
      this.router.navigate(['dashboard', this.currentUser['username'] ])
    }
    
    
  }


  receiveLoggedUser(input: object){
    this.currentUser=input;
  }
}
