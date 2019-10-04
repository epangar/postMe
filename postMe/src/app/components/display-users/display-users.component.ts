import { Component, OnInit } from '@angular/core';
import { ListOfUsers } from '../../mocks/MockUsers';
import { User } from '../../classes/User'

@Component({
  selector: 'display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['../../styles/display-users.scss']
})
export class DisplayUsersComponent implements OnInit {

  listOfUsers: User[]=ListOfUsers;
  constructor() { }

  ngOnInit() {
    this.listOfUsers = ListOfUsers.map(user=>user);
   
  }

  
}
