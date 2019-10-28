import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../../classes/Person';
import { Ticket } from '../../classes/Ticket';
import { TicketService } from '../../services/ticket.service';
import { NgModel, NgForm} from '@angular/forms';

@Component({
  selector: 'create-tickets',
  templateUrl: './create-tickets.component.html',
  styleUrls: ['../../styles/create-tickets.scss']
})
export class CreateTicketsComponent implements OnInit {

  isFormOpen: boolean;
  user: Person;
  userNumber: string;

  
  name
  surname
  business
  country
  city
  job
  phoneNumber

  @Input() 
  
  set receivedOpenComponent(sentOpenComponent :boolean ){
    
    this.isFormOpen=sentOpenComponent;
  }

  get receivedOpenComponent(){
    return this.isFormOpen;
  }

  @Input()

  set receivedUser(sentUser: Person){
    this.user=sentUser;
  }

  get receivedUser(){
    return this.user;
  }


   
  @Output()  collapseFormEmit : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    debugger
    this.userNumber=this.user['_id'];
  }

  collapse(){
    this.isFormOpen = !this.isFormOpen;
    this.collapseFormEmit.emit(this.isFormOpen);
  }

  createTicket(ticket: Ticket){
    this.ticketService.createTicket(ticket).subscribe()
  }

  resetForm(myNewTicket: NgForm){
    myNewTicket.reset()
  }

}
