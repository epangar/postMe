import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { User } from '../classes/User';
import { SessionService } from "./session.service";
import { environment } from 'src/environments/environment';

@Injectable()
export class TicketService {
  user: User;
  tickets: any;
  ticketEvent: EventEmitter<any> = new EventEmitter;

  constructor(public http: HttpClient, public sessionService: SessionService) { 
    this.getAllTickets(this.sessionService.user.id).subscribe(l => this.tickets = l);
  }

  //Create ticket
  createTicket(){
    return this.http.post(`${environment.BASEURL}/api/list`, this.tickets)
      .pipe(map((res) => {
        this.getAllTickets(this.sessionService.user.id).subscribe( r => {
          
          this.tickets = r;
          this.ticketEvent.emit(this.tickets);
        });        
      }));
  }

  //Get all the tickets
  getAllTickets(id){
    return this.http.get(`${environment.BASEURL}/api/tickets/${id}`)
    .pipe(map((res) => {
      this.ticketEvent.emit(this.tickets);
      //this.lists = res.json();
      return res;
    }));
  }

  //Get a particular ticket
  getTicket(){}
  //Update a ticket
  updateTicket(){}
  //Delete a ticket
  deleteTicket(){}
}
