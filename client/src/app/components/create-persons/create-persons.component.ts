import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../classes/Person'

@Component({
  selector: 'create-persons',
  templateUrl: './create-persons.component.html',
  styleUrls: ['../../styles/create-persons.scss']
})
export class CreatePersonsComponent implements OnInit {
  
  isFormOpen: boolean;

  userNumber
  name
  surname
  business
  country
  city
  job
  phoneNumber
  

  @Input() 
  
  set receivedOpenComponent(sentOpenComponent :boolean ){
    
    this.isFormOpen=sentOpenComponent;
  }

  get receivedOpenComponent(){
    return this.isFormOpen;
  }


   
  @Output()  collapseFormEmit : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private personService: PersonService) { }

  ngOnInit() {
    
  }

  collapse(){
    this.isFormOpen = !this.isFormOpen;
    this.collapseFormEmit.emit(this.isFormOpen);
  }

  createPerson(person: Person){
    debugger
    
    this.personService.createPerson(person).subscribe()
  }

  resetForm(myNewPerson: NgForm){
    myNewPerson.reset()
  }

}
