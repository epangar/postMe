/*import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { catch } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {

  user:any;
  entries: Array<any> =[];
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials:true };

  constructor(private http: HttpClient) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  handleUser(user?:object){
    this.user = user;
    this.userEvent.emit(this.user);
    return this.user;
  }

  signup(user) {
    return this.http.post(`${environment.BASEURL}/api/auth/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${environment.BASEURL}/api/auth/login`, {username,password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${environment.BASEURL}/api/auth/logout`,this.options)
      .pipe(map(() => {
        this.handleUser()
      }))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${environment.BASEURL}/api/auth/loggedin`, this.options)
    .pipe(map(res=>res.json()))
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  getItems() {
    this.http.get('https://example.com/api/items').pipe(map(data => {})).subscribe(result => {
      console.log(result);
    });
  } 

} */




import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

interface User {
  username:string,
  password:string
}

@Injectable()
export class SessionService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: HttpClient) {
    this.isLoggedIn().subscribe();
  }

  private user:User;
  private userEvent:EventEmitter<any>;

  getUser(){
    return this.user;
  }

  getUserEvent(){
    return this.userEvent;
  }

  private configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
        this.userEvent.emit(user);
        console.log(`Setting user, welcome ${this.user.username}`)
      }else{
        console.log(`bye bye ${this.user.username}`)
        this.user = null
        this.userEvent.emit(null);
      }
      return user;
    }
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  signup(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/auth/signup`, {username,password}, this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  /*getItems() {
    this.http.get('https://example.com/api/items').pipe(map(data => {})).subscribe(result => {
      console.log(result);
    });
  } */

  login(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/auth/login`, {username,password},this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  logout():Observable<any>{
    return this.http.get(`${this.BASEURL}/api/auth/logout`,this.options)
      .map(res => res.json())
      .map(this.configureUser(false))
      .catch(this.handleError);
  }

  isLoggedIn():Observable<any> {
    return this.http.get(`${this.BASEURL}/api/auth/loggedin`,this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }
}