import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

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
      .pipe(map(response =>response))
      .pipe(map(this.configureUser(true)))
      catchError((e: any) => Observable.throw(this.handleError(e)));
  }

  login(username:string, password:string):Observable<any>{
    
    return this.http.post(`${this.BASEURL}/api/auth/login`, {username,password},this.options)
      .pipe(map(response =>response))
      .pipe(map(this.configureUser(true)))
      catchError((e: any) => Observable.throw(this.handleError(e)));
  }

/*   logout():Observable<any>{
    return this.http.get(`${this.BASEURL}/api/auth/logout`,this.options)
      .pipe(map(response =>response))
      .pipe(map(this.configureUser(false)))
      catchError((e: any) => Observable.throw(this.handleError(e)));
  }
 */  
  logOut(){
    this.http.get(`${this.BASEURL}/api/auth/logout`,this.options)
    .pipe(map(response =>response))
    .pipe(map(this.configureUser(false)))
    catchError((e: any) => Observable.throw(this.handleError(e)));
  }


  
  /* isLoggedIn():Observable<any> {
    return this.http.get(`${this.BASEURL}/api/auth/loggedin`,this.options)
    .pipe(map(response =>response))
    .pipe(map(this.configureUser(true)))
    catchError((e: any) => Observable.throw(this.handleError(e)));
  } */

  isLoggedIn(){
    return this.http.get(`${this.BASEURL}/api/auth/loggedin`,this.options)
    .pipe(map(response =>response))
    .pipe(map(this.configureUser(true)))
    catchError((e: any) => Observable.throw(this.handleError(e)));
  }
}