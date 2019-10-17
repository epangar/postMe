import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../classes/Person';

@Component({
  selector: 'edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['../../styles/edit-person.scss']
})
export class EditPersonComponent implements OnInit {
  
  
  currentPerson: Person;

  userNumber
  name
  role
  surname
  business
  country
  city
  job
  phoneNumber


  @Input() 
  
  set receivedPerson(sentPerson: Person){
    this.currentPerson=sentPerson;
    this.currentPerson['role']=sentPerson['role']
    this.currentPerson['userNumber'] = sentPerson['userNumber']
    this.currentPerson['name'] = sentPerson['name']
    this.currentPerson['surname'] = sentPerson['surname']
    this.currentPerson['business'] = sentPerson['business']
    this.currentPerson['country'] = sentPerson['country']
    this.currentPerson['city'] = sentPerson['city']
    this.currentPerson['job'] = sentPerson['job']
    this.currentPerson['phoneNumber'] = sentPerson['phoneNumber']

  }

  get receivedPerson(){
      return this.currentPerson;
  }

  @Output() dataEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    debugger
    console.log(this.receivedPerson)
  }

  loadData(){
    //this.fullData = "Math.floor(Math.random()*100)";
            
    //this.dataEmitter.emit(this.randomNumber)
  }
}
