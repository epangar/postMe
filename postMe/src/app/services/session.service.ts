import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../classes/User';
import { Ticket } from '../classes/Ticket';


export interface loginUser {
  username: string;
  password: string;
  _id: any;
}

@Injectable()
export class SessionService {
  user: any;
  tickets: Ticket[];
  userEventEmitter: EventEmitter<any> = new EventEmitter();
  options:object = {withCredentials:true};
  //userChanged: ReplaySubject < loginUser | void > = new ReplaySubject();
  firstTime = true;

  
  constructor(private http: HttpClient) {
    //this.userChanged.next(null);
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  handleUser(user?: object){
    this.user = user;
    this.userEventEmitter.emit(this.user);
    return this.user;
  }

  signup(user: loginUser){
    return this.http.post(`${environment.BASEURL}/api/auth/signup`, this.options)
      .pipe(map(response =>response))
      .pipe(map(user=> this.handleUser(user))),
      catchError((e: any) => Observable.throw(this.handleError(e)));
  }

  login(username:string, password:string){
    
    return this.http
      .post(`${environment.BASEURL}/api/auth/login`, {username,password},this.options)
      .pipe(map(response => response))
      .pipe(map(this.configureUser(true))),
      catchError(this.handleError);
  }

  logOut(){
    this.http.get(`${environment.BASEURL}/api/auth/logout`,this.options)
    .pipe(map( ()=>this.handleUser()))
    .pipe(map(this.configureUser(false))),
    catchError((e: any) => Observable.throw(this.handleError(e)));
  }

  isLoggedIn():Observable<any> {
    return this.http.get(`${environment.BASEURL}/api/auth/loggedin`,this.options)
    .pipe(map(response =>response))
    .pipe(map(user=>this.configureUser(true)))
    catchError((e: any) => Observable.throw(this.handleError(e)));
  }
  

  getUser(): loginUser | void {
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
  

  

 

/*   logout():Observable<any>{
    return this.http.get(`${environment.BASEURL}/api/auth/logout`,this.options)
      .pipe(map(response =>response))
      .pipe(map(this.configureUser(false)))
      catchError((e: any) => Observable.throw(this.handleError(e)));
  }
 */  
  


  
  /* isLoggedIn():Observable<any> {
    return this.http.get(`${environment.BASEURL}/api/auth/loggedin`,this.options)
    .pipe(map(response =>response))
    .pipe(map(this.configureUser(true)))
    catchError((e: any) => Observable.throw(this.handleError(e)));
  } */

  
}