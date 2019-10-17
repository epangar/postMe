import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manage-tickets',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['../../styles/ticket-management.scss']
})
export class TicketManagementComponent implements OnInit {

  sentOpenComponent: boolean;
  createTickets: boolean;
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
