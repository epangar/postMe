import { Component, OnInit, Input } from '@angular/core';
// import { ListOfTickets } from '../../mocks/MockTickets';
import { Ticket } from '../../classes/Ticket';
import { PersonService } from '../../services/person.service';
import { TicketService } from '../../services/ticket.service';



@Component({
  selector: 'display-tickets',
  templateUrl: './display-tickets.component.html',
  styleUrls: ['../../styles/display-tickets.scss']
})
export class DisplayTicketsComponent implements OnInit {

  listOfTickets: Ticket[];
  whichTicketIsDisplayed: number = -1;

  user: any;
  myUserId: string;

  @Input()
  set currentUser(input){
    
    this.user=input;
  }

  get currentUser(){
    return this.user;
  }

  constructor(private ticketService: TicketService) { 
    this.ticketService.getTicketsByUserId(this.myUserId).subscribe( q =>{
      this.listOfTickets = q;
    })
  }

  ngOnInit() {
    // this.listOfTickets = ListOfTickets.map(ticket=>ticket)
    //                                   .sort((a,b)=>b.ticketNumber-a.ticketNumber);

    this.myUserId=this.user._id
    debugger
  }
  
  showTicketData(i: number){
    if(this.whichTicketIsDisplayed !==-1 ){
      this.whichTicketIsDisplayed = -1;
    } else {
      this.whichTicketIsDisplayed = i;
    }
    
    
  }
}
