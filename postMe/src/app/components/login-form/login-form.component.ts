import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../styles/login-form.scss']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  

  constructor(public sessionService: SessionService) {}

  ngOnInit() {}

  login() {
    
    console.log(this.username, this.password);
    this.sessionService.logIn(this.username, this.password);
  }

  signup() {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(user);
    //this.sessionService.signup(this.username, this.password).subscribe();
  }
}
