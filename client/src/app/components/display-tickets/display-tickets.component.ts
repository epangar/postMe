import { Component, OnInit } from '@angular/core';
import { ListOfTickets } from '../../mocks/MockTickets';
import { Ticket } from '../../classes/Ticket';


@Component({
  selector: 'display-tickets',
  templateUrl: './display-tickets.component.html',
  styleUrls: ['../../styles/display-tickets.scss']
})
export class DisplayTicketsComponent implements OnInit {

  listOfTickets: Ticket[] = ListOfTickets;
  whichTicketIsDisplayed: number = -1;
  constructor() { }

  ngOnInit() {
    this.listOfTickets = ListOfTickets.map(ticket=>ticket)
                                      .sort((a,b)=>b.ticketNumber-a.ticketNumber);
  }
  
  showTicketData(i: number){
    if(this.whichTicketIsDisplayed !==-1 ){
      this.whichTicketIsDisplayed = -1;
    } else {
      this.whichTicketIsDisplayed = i;
    }
    
    
  }
}
