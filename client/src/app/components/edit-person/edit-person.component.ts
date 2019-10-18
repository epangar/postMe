import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../classes/Person';

@Component({
  selector: 'edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['../../styles/edit-person.scss']
})
export class EditPersonComponent implements OnInit {
  
  
  currentPerson: Person;

  userNumber: string;
  name: string;
  role: string;
  surname: string;
  business: string;
  country: string;
  city: string;
  job: string;
  phoneNumber: string;


  @Input() 
  
  set receivedPerson(sentPerson: Person){
    debugger
    console.log(sentPerson)
    
    this.currentPerson=sentPerson;
    this.currentPerson['role']=this.role;
    this.currentPerson['userNumber'] = this.userNumber;
    this.currentPerson['name'] = this.name;
    this.currentPerson['surname'] = this.surname;
    this.currentPerson['business'] = this.business;
    this.currentPerson['country'] = this.country;
    this.currentPerson['city'] = this.city;
    this.currentPerson['job'] = this.job;
    this.currentPerson['phoneNumber'] = this.phoneNumber;

  }

  get receivedPerson(){
      return this.currentPerson;
  }

  @Output() dataEmitter: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
    
    console.log(this.currentPerson)
    this.loadData();
  }

  loadData(){
            
    this.dataEmitter.emit(this.currentPerson)
  }
}
