import { Component, OnInit, EventEmitter, Input } from '@angular/core';
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
  listOfPeopleEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  user: object;

  @Input()
  set currentUser(input){
    
    this.user=input;
  }

  get currentUser(){
    return this.user;
  }
  
  constructor(private PersonService:PersonService, ) {}

  ngOnInit() {
    this.createUsers=false;
    this.getAllUsers();
    
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

  searchUsers(){

  }
}
