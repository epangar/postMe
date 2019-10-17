import { Component, OnInit, Input } from '@angular/core';
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
  displayEditUserData: boolean;
  sentPerson:Person;
  
  user: any;

  @Input()
  set currentUser(input){
    
    this.user=input;
  }

  get currentUser(){
    return this.user;
  }
  
  constructor(private personService: PersonService) { }

  ngOnInit() {
    
    //this.listOfPersons = ListOfPersons.map(user=>user);
    this.personService.getList().subscribe(r=>{
      this.listOfPersons=r;
      console.log(this.listOfPersons)
    })
    this.displayEditUserData= false;
    
    
    
   
  }

  showData(){
    // this.dataIsShowing=!this.dataIsShowing;
  }

  showPersonData(i: number){
    if(this.whoIsDisplayed !==-1 ){
      this.whoIsDisplayed = -1;
    } 
    
    this.whoIsDisplayed = i;
    
    this.sentPerson=this.listOfPersons[i];
    
  }

  editOpen(){

  }

  editUser(user){
    this.personService.editUser(user.id).subscribe();
  }
  
}
