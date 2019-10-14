import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { LoginUser } from 'src/app/classes/AccessUser';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';




@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../styles/login-form.scss']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  user: any;

  @Input() TerryPratchett;
  @Output() loggedUserEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private session: SessionService, public route: Router) {}

  ngOnInit() {
    
  }

  login() {
    const myLoginData: LoginUser = new LoginUser(this.username, this.password);
    this.session.logIn(myLoginData)
    .pipe(map(()=>{
      
      this.user=this.session.user;
      this.loggedUserEmitter.emit(this.user);
      this.session.userEventEmitter.emit(this.session.user);
    }))
    .subscribe();
    
  }

  
}
