import { Component, OnInit } from '@angular/core';
import { SignUpUser } from '../../classes/AccessUser';
import { SessionService } from "../../services/session.service";



@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../styles/sign-up.scss']

 
})
export class SignUpComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  

  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }

  signup() {
    const mySignUpUser: SignUpUser = new SignUpUser(this.username, this.email, this.password);
    console.log(mySignUpUser);
    this.sessionService.signup(mySignUpUser).subscribe();
  }

}
