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

  constructor(private http: HttpClient) { }

  //Create user
  //Get all the users

  getList() {
    return this.http.get(`${environment.BASEURL}/api/phone`)
      .pipe(map((res) => res));
  }

  //Get a particular user
  //Update an user
  //Delete an user
}
