import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { LoginUser } from 'src/app/classes/AccessUser';




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
    const myLoginData: LoginUser = new LoginUser(this.username, this.password);
    debugger
    console.log(myLoginData['username'], myLoginData['password']);
    this.sessionService.logIn(myLoginData).subscribe();
  }

  
}
