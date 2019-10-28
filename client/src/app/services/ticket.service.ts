import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { Person } from '../classes/Person';
import { SessionService } from "./session.service";
import { environment } from '../../environments/environment';

@Injectable()
export class TicketService {
  user: Person;
  tickets: any;
  listOfTicket: Ticket[];
  ticketEventEmitter: EventEmitter<any> = new EventEmitter;

  constructor(public http: HttpClient, private session: SessionService) { 
    this.getAllTickets().subscribe(l => this.tickets = l);
  }

  handleTicket(input: any){
    this.listOfTicket = input.map( (e: Ticket)=> e)
    return this.listOfTicket;
  }
  handleError(e): Observable<any> {
    console.log(e)
    return throwError(e);
  }

  //Create ticket
  createTicket(ticket: Ticket){
    return this.http.post(`${environment.BASEURL}/api/tickets`, ticket)
      .pipe(map((res) => {
        this.getAllTickets(this.session.user._id).subscribe( r => {
          
          this.tickets = r;
          this.ticketEventEmitter.emit(this.tickets);
        });        
      }));
  }

  //Get all the tickets
  getAllTickets(id?){
    return this.http.get(`${environment.BASEURL}/api/tickets/`)
    .pipe(map((res) => {
      this.ticketEventEmitter.emit(this.tickets);
      //this.lists = res.json();
      return res;
    }));
  }

  getMyTickets(id){
    
  }

  //Get a particular ticket
  getTicket(ticket){
    return this.http.get(`${environment.BASEURL}/api/tickets/${ticket._id}`, ticket)
    .pipe(map((res) => res));
  }


  //Update a ticket
  updateTicket(ticket){
    return this.http.put(`${environment.BASEURL}/api/tickets/${ticket._id}`, ticket)
      .pipe(map(ticket => ticket))
      .pipe(catchError((e: any) => this.handleError(e)));
  }


  //Delete a ticket
  deleteTicket(ticket){
    return this.http.delete(`${environment.BASEURL}/api/tickets/${ticket._id}`)
      .pipe(map((res) => res));
  }
}

