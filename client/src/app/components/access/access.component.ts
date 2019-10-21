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
  currentUserId: string;
  

  constructor(
    //private PersonService:PersonService, 
    private session: SessionService,
    private router: Router 
    ) { }

  ngOnInit() {
    if(!this.currentUser){
      //debugger
      setTimeout(()=>console.clear(), 2000)
    } else{
      //debugger
      this.goToDashBoard();
    }
    
    
  }


  receiveLoggedUser(input: object){
    //debugger
    this.currentUser=input;
    this.currentUserId=input['_id']
  }

  goToDashBoard():void{
    //debugger
    console.log(this.currentUser)
    this.router.navigate(['/dashboard', this.currentUserId ])
  }
}
