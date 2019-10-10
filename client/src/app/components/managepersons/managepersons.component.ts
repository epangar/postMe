import { Component, OnInit } from '@angular/core';
/* import { PersonService } from '../../services/user.service'
import { SessionService } from 'src/app/services/session.service'; */

@Component({
  selector: 'manage-persons',
  templateUrl: './managepersons.component.html',
  styleUrls: ['../../styles/manage-persons.scss']
})
export class ManagePersonsComponent implements OnInit {

  sentOpenComponent: boolean;
  createUsers: boolean;
  constructor(
    //private PersonService:PersonService, 
    //private session: Session 
     ) {}

  ngOnInit() {
    this.createUsers=false;
  }

  displayCreateUsers(){
    this.createUsers=!this.createUsers;
    this.sentOpenComponent=true;
  }

  receiveCloseForm(input: boolean):void{
    this.createUsers=input;
  }

   getAllUsers(){
  //  return this.PersonService.getList()
  }
}
