import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
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
  editedPerson: Person
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
    
    // this.personService.getList().subscribe(r=>{
    //   this.listOfPersons=r;
      
    // })

    this.displayEditUserData= false;
    this.dataIsShowing = false;
  }

  ngOnInit() {
    this.fetchAll();
  }

  showData(){
    // debugger
    this.dataIsShowing=!this.dataIsShowing;
  }

  showPersonData(i: number){
    
    if(this.whoIsDisplayed !==-1 ){
      this.whoIsDisplayed = -1;
    } else if(this.whoIsDisplayed ===-1 ){
      this.whoIsDisplayed = i;
    }
    
    
    this.displayEditUserData=false;
    
    
    this.showData();
    
    this.sentPerson=this.listOfPersons[i];
    
  }



  editOpen(person){
    // debugger
    this.sentPerson=person;
    this.displayEditUserData=!this.displayEditUserData;
  }

  editUser(user){
    this.personService.editUser(user._id).subscribe();
  }

  deletePerson(user){
    this.personService.removeUser(user._id).subscribe(()=>{
      debugger
      this.fetchAll();
    })
  }

  fetchAll(){
    this.personService.getList().subscribe(users=>{
      this.listOfPersons=users;
      
    })
  }
  
}
