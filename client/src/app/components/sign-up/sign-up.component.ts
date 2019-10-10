import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../classes/LoginUser';
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
    const user = new LoginUser(this.username, this.email, this.password);
    console.log(user);
    this.sessionService.signup(user).subscribe();
  }

}
