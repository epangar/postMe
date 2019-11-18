import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../classes/Ticket'

@Component({
  selector: 'edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['../../styles/edit-ticket.scss']
})



export class EditTicketComponent implements OnInit {
  isFormOpen: boolean;
  
  currentTicket: Ticket;

  @Input() 
  
  set receivedTicket(sentTicket: Ticket){
    
    console.log(sentTicket)
    
    this.currentTicket=sentTicket;
  }

  get receivedTicket(){
    return this.currentTicket;
  }

  @Output() dataEmitter: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  @Output()  collapseFormEmit : EventEmitter<boolean> = new EventEmitter<boolean>();


  
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    console.log(this.currentTicket)
  }

  loadData(){
            
    this.dataEmitter.emit(this.currentTicket)
  }

  editPerson(){
    console.log(this.currentTicket)
    this.ticketService.editTicket(this.currentTicket).subscribe()
  }
}
