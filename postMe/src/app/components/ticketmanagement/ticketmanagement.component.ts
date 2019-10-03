import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'managetickets',
  templateUrl: './ticketmanagement.component.html',
  styleUrls: ['../../styles/ticketmanagement.scss']
})
export class TicketmanagementComponent implements OnInit {

  createTickets: boolean;
  constructor() { }

  ngOnInit() {
    this.createTickets=false;
  }

  displayCreateTickets(){
    this.createTickets=!this.createTickets;
  }
}
