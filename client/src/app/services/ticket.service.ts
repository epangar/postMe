import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
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
    
    
    //this.getTicketsByUserId(this.session.user._id).subscribe();
    
    this.getAllTickets().subscribe(r => {
      this.myUserId=this.session.user._id;
    })
    
    
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  handleTicket(input: Ticket[]){
    
    this.listOfTicket = input.map( (e: Ticket)=> e)
    this.totalTickets = this.listOfTicket.length;

    if(this.listOfTicket.length>0){
      this.totalTicketEventEmitter.emit(this.totalTickets);
    }
    return this.listOfTicket;
  }

  handleError(e): Observable<any> {
    console.log(e)
    return throwError(e);
  }

  //Create ticket
  createTicket(ticket){
    return this.http.post(`${environment.BASEURL}/api/tickets`, ticket)
      .pipe(map(()=>{
        this.getAllTickets().subscribe( r=> {
          this.tickets = r;
          this.ticketEventEmitter.emit(this.tickets);
        });
      }))
  };

  //Get all the tickets
  getAllTickets() : Observable<Ticket[]> {
    
    
    return this.http.get<Ticket[]>(`${environment.BASEURL}/api/tickets`)
      .pipe(
        map(res => res),
        map(res => this.handleTicket(res))
      )
      
  }

  //Get total number of tickets

  
  //Get Tickets by a particular user
  getTicketsByUserId(id) : Observable<Ticket[]>{
    var url = `${environment.BASEURL}/api/tickets`;
    
    return this.http.get<Ticket[]>(url)
    .pipe(
      filter(ticket => ticket['_id']===id),
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
    debugger
    return this.http.delete(`${environment.BASEURL}/api/tickets/${ticket._id}`)
      .pipe(map((res) => res));
  }

  //Add Ticket Number
  addTicketNumber(){


    if(this.listOfTicket.length>0){

    }
  }
}

