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

  
  //newTicket: Ticket;
  ticketTitle: string;
  ticketDetails: string;
    

  open: boolean;
  status: string;
  urgency: number;
  creationDate: Date;

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
    
    this.userNumber=this.user['_id'];
  }

  collapse(){
    this.isFormOpen = !this.isFormOpen;
    this.collapseFormEmit.emit(this.isFormOpen);
  }

  createTicket(myNewTicket: NgForm){

    this.fillTicket(myNewTicket);
    
    console.log(myNewTicket)
    debugger
    this.ticketService.createTicket(myNewTicket).subscribe()
  }

  fillTicket(myNewTicket: NgForm){
    Object.keys(this.user).forEach(key=>{
      
      if(!["password", "__v", "created_at", "updated_at", "_id"].includes(key)){
        myNewTicket[key]=this.user[key];
      }

    })
    myNewTicket['userId']=this.user['_id'];
    myNewTicket['open']=true;
    myNewTicket['currentStatus']= "OPEN";
    myNewTicket['urgency']= this.urgency;
    myNewTicket['ticketNumber']=this.ticketService.totalTickets+1;
  
  }

  resetForm(myNewTicket: NgForm){
    myNewTicket.reset()
  }

}
