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
    this.listOfPerson = input.map( (e: Person)=> e)
    return this.listOfPerson;
  }

  //Create person

  createPerson(person: Person) {
    return this.http.post(`${environment.BASEURL}/api/users`, person)
      .pipe(map(() => {
        this.getList().subscribe( r => {
          
          console.log(r)
          this.listOfPerson = r;
          this.listOfPersonEventEmitter.emit(this.listOfPerson);
        });        
      }))
    };
  
  //Get all the people

  getList() {
    //debugger
    return this.http.get(`${environment.BASEURL}/api/users`)
      .pipe(map(res => res))
      .pipe(map(res => this.handlePerson(res)));
  }

  //Get a particular person
  getUser(id){

  }

  //Update a person's data
  editUser(user) {
    return this.http.put(`${environment.BASEURL}/api/users/${user.id}`, user)
      .pipe(map(user => user))
      
  }
  //Delete a person
}
