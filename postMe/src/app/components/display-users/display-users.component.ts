import { Component, OnInit } from '@angular/core';
import { ListOfUsers } from '../../mocks/MockUsers';
import { User } from '../../classes/User'

@Component({
  selector: 'display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['../../styles/display-users.scss']
})
export class DisplayUsersComponent implements OnInit {

  listOfUsers: User[] = ListOfUsers;
  whoIsDisplayed: number = -1;
  // dataIsShowing:boolean;
  constructor() { }

  ngOnInit() {
    
    this.listOfUsers = ListOfUsers.map(user=>user);
    
    // this.dataIsShowing=false;
   
  }

  showData(){
    // this.dataIsShowing=!this.dataIsShowing;
  }

  showUserData(i: number){
    
    this.whoIsDisplayed = i;
    
  }
  
}
