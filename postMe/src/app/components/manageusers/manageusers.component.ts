import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['../../styles/manageusers.scss']
})
export class ManageusersComponent implements OnInit {

  sentOpenComponent: boolean;
  createUsers: boolean;
  constructor() { }

  ngOnInit() {
    this.createUsers=false;
  }

  displayCreateUsers(){
    this.createUsers=!this.createUsers;
    this.sentOpenComponent=true;
  }

  receiveCloseForm(input: boolean):void{
    console.log(input);
    this.createUsers=input;
  }
}
