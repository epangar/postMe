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
  displayEditTicketData: boolean;
  sentTicket:Ticket;
  user: any;
  myUserId: string;
  dataIsShowing: boolean;

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

    this.myUserId=this.user._id;
    this.fetchAll()
    // debugger
  }
  
  showData(){
    // debugger
    this.dataIsShowing=!this.dataIsShowing;
  }

  showTicketData(i: number){
    if(this.whichTicketIsDisplayed !==-1 ){
      this.whichTicketIsDisplayed = -1;
    } else {
      this.whichTicketIsDisplayed = i;
    }
    
    this.displayEditTicketData=false;

    this.showData();
    
    this.sentTicket=this.listOfTickets[i];
  }

  editOpen(ticket){
    // debugger
    this.sentTicket=ticket;
    this.displayEditTicketData=!this.displayEditTicketData;
  }

  deleteTicket(ticket){
    debugger
    this.ticketService.deleteTicket(ticket._id).subscribe(()=>{
      debugger
      this.fetchAll();
    })
  }

  fetchAll(){
    this.ticketService.getAllTickets().subscribe(tickets=>{
      this.listOfTickets=tickets;
      
    })
  }
}
