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
  editedPerson: Person;
  
  user: any;
  dataIsShowing: boolean;

  @Input()
  set currentUser(input){
    
    this.user=input;
  }

  get currentUser(){
    return this.user;
  }
  
  constructor(private personService: PersonService) { 

    this.personService.getList().subscribe(r=>{
      this.listOfPersons=r;
      console.log(this.listOfPersons)
    })

    this.displayEditUserData= false;
    this.dataIsShowing = false;
  }

  ngOnInit() {
   
  }

  showData(){
    // debugger
    this.dataIsShowing=!this.dataIsShowing;
  }

  showPersonData(i: number){
    debugger
    if(this.whoIsDisplayed !==-1 ){
      this.whoIsDisplayed = -1;
    } else if(this.whoIsDisplayed ===-1 ){
      this.whoIsDisplayed = i;
    }
    
    if(this.displayEditUserData===true){
      this.displayEditUserData=false;
    }else {
      this.displayEditUserData=true;
    }
    
    this.showData();
    this.whoIsDisplayed = i;
    
    this.sentPerson=this.listOfPersons[i];
    
  }

  editOpen(person){
    debugger
    this.sentPerson=person;
    this.displayEditUserData=!this.displayEditUserData;
  }

  editUser(user){
    this.personService.editUser(user.id).subscribe();
  }
  
}
