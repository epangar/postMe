import { Component, OnInit } from '@angular/core';
//import { ListOfPersons } from '../../mocks/MockPersons';
import { Person } from '../../classes/Person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'display-persons',
  templateUrl: './display-persons.component.html',
  styleUrls: ['../../styles/display-persons.scss']
})
export class DisplayPersonsComponent implements OnInit {

  listOfPersons: Person[];
  whoIsDisplayed: number = -1;
  
  constructor(private personService: PersonService) { }

  ngOnInit() {
    
    //this.listOfPersons = ListOfPersons.map(user=>user);
    this.personService.getList().subscribe(r=>{
      this.listOfPersons=r;
    })
    
   
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
