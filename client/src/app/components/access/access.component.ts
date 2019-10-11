import { Component, OnInit } from '@angular/core';

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
    //private session: Session 
    ) { }

  ngOnInit() {
    if(!this.currentUser){
      setTimeout(()=>console.clear(), 2000)
    } else{
      console.log(this.currentUser)
    }
    
    
  }


  receiveLoggedUser(input: object){
    debugger
    this.currentUser=input;
  }
}
