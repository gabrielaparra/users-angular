import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fullNameValue: string;
  emailValue: string;
  passwordValue: string;
  errorMessage: string;

  loginEmail: string;
  loginPassword: string;

  constructor(
    private authThing: AuthServiceService,
    private routerThing: Router
  ) { }

  ngOnInit() {
  }

  doSignUp() {
    this.authThing.signup(this.fullNameValue, this.emailValue, this.passwordValue)
      .then((resultFromApi) => {
        this.fullNameValue = "";
        this.emailValue = "";
        this.passwordValue = "";
        this.errorMessage = "";

        //redirect to camels
        this.routerThing.navigate(['/camels']);
      })
      .catch((err) => {
        const parsedError = err.json();
        this.errorMessage = parsedError.message;
      })
  }

  doLogin() {
    alert('login submitted');
  }
}
