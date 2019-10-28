import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { Person } from '../classes/Person';
import { SessionService } from "./session.service";
import { environment } from '../../environments/environment';

@Injectable()
export class TicketService {
  user: Person;
  myUserId: String;
  tickets: any;
  totalTickets:number;
  listOfTicket: Ticket[];
  ticketEventEmitter: EventEmitter<any> = new EventEmitter;
  totalTicketEventEmitter: EventEmitter<any> = new EventEmitter;


  constructor(public http: HttpClient, private session: SessionService) { 
    this.getTicketsByUserId(this.session.user._id).subscribe(l => {
      this.myUserId=this.session.user._id;
      this.tickets = l;
      this.totalTickets=this.tickets.length;
    });
    
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  handleTicket(input: any){
    this.listOfTicket = input.map( (e: Ticket)=> e)
    return this.listOfTicket;
  }
  handleError(e): Observable<any> {
    console.log(e)
    return throwError(e);
  }

  //Create ticket
  createTicket(ticket){
    debugger
    return this.http.post(`${environment.BASEURL}/api/tickets`, ticket)
      .pipe(map((res) => {
        this.getTicketsByUserId(this.myUserId).subscribe( r => {
          
          this.tickets = r;
          this.ticketEventEmitter.emit(this.tickets);
        });        
      }));
  }

  //Get all the tickets
  getAllTickets() : Observable<Ticket[]> {
    
    return this.http.get<Ticket[]>(`${environment.BASEURL}/api/tickets`)
      .pipe(
        map(res => res),
        map(res => this.handleTicket(res))
      )
      
  }

  //Get total number of tickets

  // getTotalNumberOfTickets() {
  //   return this.http.get(`${environment.BASEURL}/api/tickets/`)
  //   .pipe(map((res) => {
      
  //     this.totalTicketEventEmitter.emit(this.totalTickets);
     
  //     return res;
  //   }));
  // }

  //Get Tickets by a particular user
  getTicketsByUserId(id) : Observable<Ticket[]>{
    var url = `${environment.BASEURL}/api/object/${id}`;

    return this.http.get<Ticket[]>(url)
    .pipe(
      map((res) => res),
      map(res => this.handleTicket(res))
    )
  }

  

  //Get All My Tickets
  // getAllMyTickets() : Observable<Ticket[]> {
  //   this.getTicketsByUserId(this.user['_id']).subscribe( g => {
  //     this.tickets=g;
  //   })
  // }

  //Get a particular ticket
  getTicketById(ticket){
    return this.http.get(`${environment.BASEURL}/api/tickets/${ticket._id}`, ticket)
    .pipe(map((res) => res));
  }


  //Update a particular ticket
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

