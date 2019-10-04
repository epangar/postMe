import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'managetickets',
  templateUrl: './ticketmanagement.component.html',
  styleUrls: ['../../styles/ticketmanagement.scss']
})
export class TicketmanagementComponent implements OnInit {

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
