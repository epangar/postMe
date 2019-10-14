import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { Person } from '../classes/Person';
import { SessionService } from "./session.service";
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonService {
  listOfPerson: Array<any>=[];
  listOfPersonEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  handlePerson(input: any){
    this.listOfPerson = input.map( e=> {
      const person = {
        username: e.username,
        role: e.role
      }
    })
    return this.listOfPerson;
  }
  //Create user
  //Get all the users

  getList() {
    //debugger
    return this.http.get(`${environment.BASEURL}/api/users`)
      .pipe(map(res => res))
      .pipe(map(res => this.handlePerson(res)));
  }

  //Get a particular user
  //Update an user
  //Delete an user
}
