import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../classes/Person'

@Component({
  selector: 'edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['../../styles/edit-person.scss']
})
export class EditPersonComponent implements OnInit {
  isFormOpen: boolean;
  
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
    
    console.log(sentPerson)
    
    this.currentPerson=sentPerson;
    // debugger
    

  }

  get receivedPerson(){
      return this.currentPerson;
  }

  @Output() dataEmitter: EventEmitter<Person> = new EventEmitter<Person>();
  @Output()  collapseFormEmit : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private personService: PersonService) { 
    // debugger
    this.collapse();
  }

  ngOnInit() {
    
    console.log(this.currentPerson)
    this.loadData();
  }

  loadData(){
            
    this.dataEmitter.emit(this.currentPerson)
  }

  editPerson(){
    console.log(this.currentPerson)
    this.personService.editUser(this.currentPerson).subscribe()
  }

  resetForm(myEditedPerson: NgForm){
    myEditedPerson.reset()
  }

  collapse(){
    this.isFormOpen = !this.isFormOpen;
    this.collapseFormEmit.emit(this.isFormOpen);
  }
}
