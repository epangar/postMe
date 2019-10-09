import { Component, OnInit } from '@angular/core';
/* import { UserService } from '../../services/user.service'
import { SessionService } from 'src/app/services/session.service'; */

@Component({
  selector: 'manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['../../styles/manageusers.scss']
})
export class ManageusersComponent implements OnInit {

  sentOpenComponent: boolean;
  createUsers: boolean;
  constructor(
    //private UserService:UserService, 
    //private sessionService: SessionService 
     ) {}

  ngOnInit() {
    this.createUsers=false;
  }

  displayCreateUsers(){
    this.createUsers=!this.createUsers;
    this.sentOpenComponent=true;
  }

  receiveCloseForm(input: boolean):void{
    this.createUsers=input;
  }

   getAllUsers(){
  //  return this.UserService.getList()
  }
}
