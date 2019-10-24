import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { Person } from '../classes/Person';
import { SessionService } from "./session.service";
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonService {
  listOfPerson: Array<any>=[];
  listOfPersonEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient, public sessionService: SessionService) { 
    this.getList().subscribe(l => this.listOfPerson = l);
  }

  handlePerson(input: any){
    this.listOfPerson = input.map( (e: Person)=> e)
    return this.listOfPerson;
  }
  handleError(e): Observable<any> {
    console.log(e)
    return throwError(e);
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
  getUser(user){
    debugger
    
    return this.http.get(`${environment.BASEURL}/api/users/${user._id}`, user)
    .pipe(map((res) => res));
  }

  //Update a person's data
  editUser(user)  {
    console.log(`${environment.BASEURL}/api/users/${user._id}`)
    return this.http.put(`${environment.BASEURL}/api/users/${user._id}`, user)
      .pipe(map(user => user))
      .pipe(catchError((e: any) => this.handleError(e)));
  }


  //Delete a person
  removeUser(user) {
    return this.http.delete(`${environment.BASEURL}/api/users/${user._id}`)
      .pipe(map((res) => res));
  }
}
