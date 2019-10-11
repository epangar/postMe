import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginUser, SignUpUser } from '../classes/AccessUser';
import { Ticket } from '../classes/Ticket';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  user: any;
  tickets: Ticket[];
  userEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  options:object = {withCredentials:true};
  // firstTime = true;

  
  constructor(private http: HttpClient, private route: Router) {
    //this.userChanged.next(null);
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e) /*(e.json().message);*/
  }

  handleUser(user?: object){
    this.user = user;
    this.userEventEmitter.emit(this.user);
    return this.user;
  }

  signup = (user: SignUpUser):Observable<any> => {
    
    return this.http.post(`${environment.BASEURL}/api/auth/signup`, user, this.options)
      .pipe(map(response =>response))
      .pipe(map(user=> this.handleUser(user)))
      .pipe(catchError(this.handleError))
  }

  logIn = (user: LoginUser) :Observable<any> => {  
    
    return this.http.post(`${environment.BASEURL}/api/auth/login`, user ,this.options)
      .pipe(map(response => response))
      .pipe(map(user => this.handleUser(user)))
      .pipe(catchError(this.handleError))
      .pipe(map(user => this.navigateTo(user)))
  }

  logOut(){
    this.http.get(`${environment.BASEURL}/api/auth/logout`,this.options)
    .pipe(map( ()=>this.handleUser()))
    .pipe(map(this.configureUser(false))),
    catchError((e: any) => Observable.throw(this.handleError(e)));
  }

  isLoggedIn = () :Observable<any> => {
    return this.http.get(`${environment.BASEURL}/api/auth/loggedin`,this.options)
    .pipe(map(response =>response))
    .pipe(map(user=>this.configureUser(true)))
    .pipe(catchError((e: any) => 
      Observable.throw(this.handleError(e)))
      );
  }
  
  navigateTo=(user: object)=> {
    
    if(user){
      this.route.navigate(['dashboard', user['username'] ])
    }
    
  }

  getUser(): LoginUser | void {
    return this.user;
  }

  getUserEvent(){
    return this.userEventEmitter;
  }

  

  private configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
        this.userEventEmitter.emit(user);
        console.log(`Setting user, welcome ${this.user.username}`)
      }else{
        console.log(`bye bye ${this.user.username}`)
        this.user = null
        this.userEventEmitter.emit(null);
      }
      return user;
    }
  }
  

  
}