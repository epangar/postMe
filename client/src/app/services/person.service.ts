import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { Ticket } from '../classes/Ticket';
import { Person } from '../classes/Person';
import { SessionService } from "./session.service";
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonService {
  listOfPerson: Array<Person>=[];
  listOfPersonEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient, public sessionService: SessionService) { 
    this.getList().subscribe(l => this.listOfPerson = l);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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
  getList() : Observable<Person[]> {
    
    return this.http.get<Person[]>(`${environment.BASEURL}/api/users`)
      .pipe(
        map(res => res),
        map(res => this.handlePerson(res))
      )
      
  }

  //Get a particular person
  getUser(user) : Observable<Person[]>{
    
    var url = `${environment.BASEURL}/api/users/${user._id}`;
    
    return this.http.get<Person[]>(url, user)
    .pipe(
      map((res) => res),
      map(res => this.handlePerson(res))
    )
    
  }

  //Update a person's data
  editUser(user: Person): Observable<any> {
    var url=`${environment.BASEURL}/api/users/${user['_id']}`;
    
    return this.http.put(url, user, this.httpOptions).pipe(  
        map(user => user),
        catchError((e: any) => this.handleError(e))
      );
  }


  //Delete a person
  removeUser(id: string): Observable<Person[]> {
    //debugger
    var url=`${environment.BASEURL}/api/users/${id}`;
    debugger
    return this.http.delete<Person>(url, this.httpOptions).pipe(
        map(user => user),
        map(() => this.getList().subscribe( r => {
          
          console.log(r)
          this.listOfPerson = r;
          this.listOfPersonEventEmitter.emit(this.listOfPerson);
        })),
        catchError((e: any) => this.handleError(e))
      );
  }
}
