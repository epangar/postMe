import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service'
//import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'manage-persons',
  templateUrl: './manage-persons.component.html',
  styleUrls: ['../../styles/manage-persons.scss']
})
export class ManagePersonsComponent implements OnInit {

  sentOpenComponent: boolean;
  createUsers: boolean;
  constructor(
    private PersonService:PersonService, 
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
    this.PersonService.getList().subscribe()
    this.PersonService.listOfPersonEventEmitter.emit(this.PersonService.listOfPerson)
  }
}
