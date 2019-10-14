import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { Person } from '../classes/Person';
import { SessionService } from "./session.service";
import { environment } from 'src/environments/environment';

@Injectable()
export class TicketService {
  user: Person;
  tickets: any;
  ticketEventEmitter: EventEmitter<any> = new EventEmitter;

  constructor(public http: HttpClient, private session: SessionService) { 
    this.getAllTickets(this.session.user._id).subscribe(l => this.tickets = l);
  }

  //Create ticket
  createTicket(){
    return this.http.post(`${environment.BASEURL}/api/tickets`, this.tickets)
      .pipe(map((res) => {
        this.getAllTickets(this.session.user._id).subscribe( r => {
          
          this.tickets = r;
          this.ticketEventEmitter.emit(this.tickets);
        });        
      }));
  }

  //Get all the tickets
  getAllTickets(id){
    return this.http.get(`${environment.BASEURL}/api/tickets/${id}`)
    .pipe(map((res) => {
      this.ticketEventEmitter.emit(this.tickets);
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
