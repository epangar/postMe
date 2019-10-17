import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'manage-tickets',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['../../styles/ticket-management.scss']
})
export class TicketManagementComponent implements OnInit {

  sentOpenComponent: boolean;
  createTickets: boolean;
  user: any;

  @Input()
  set currentUser(input){
    debugger
    this.user=input;
  }

  get currentUser(){
    return this.user;
  }

  constructor() { }

  ngOnInit() {
    this.createTickets=false;
  }

  displayCreateTickets(){
    this.createTickets=!this.createTickets;
    this.sentOpenComponent=true;
  }

  receiveCloseForm(input: boolean):void{
    console.log(input);
    this.createTickets=input;
  }
}
