import { Component, OnInit } from '@angular/core';
import { ListOfPersons } from '../../mocks/MockPersons';
import { Person } from '../../classes/Person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'display-persons',
  templateUrl: './display-persons.component.html',
  styleUrls: ['../../styles/display-persons.scss']
})
export class DisplayPersonsComponent implements OnInit {

  listOfPersons: Person[] = ListOfPersons;
  whoIsDisplayed: number = -1;
  // dataIsShowing:boolean;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    
    this.listOfPersons = ListOfPersons.map(user=>user);
    
    // this.dataIsShowing=false;
   
  }

  showData(){
    // this.dataIsShowing=!this.dataIsShowing;
  }

  showPersonData(i: number){
    if(this.whoIsDisplayed !==-1 ){
      this.whoIsDisplayed = -1;
    } else {
      this.whoIsDisplayed = i;
    }
    
    
  }

  editOpen(){

  }

  editUser(id){
    this.personService.editUser(id).subscribe();
  }
  
}
