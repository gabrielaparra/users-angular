import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  isLoggedOut: boolean = false;
  //values from the sign up
  fullNameValue: string;
  emailValue: string;
  passwordValue: string;
  errorMessage: string;
  //the message comes from Passport in the backend

  //values from the log in
  loginEmail: string;
  loginPassword: string;
  loginErrorMessage: string;
  //the message comes from Passport in the backend

  constructor(
    private authThing: AuthServiceService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.authThing.checkLogin()
      //if success, we are logged in
      .then((resultFromApi) => {
        this.routerThing.navigate(['/camels']);
      })
      //even if you don't do anything on error, catch to avoid a console error
      .catch((err) => {
        this.isLoggedOut = true;
      });
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
    this.authThing.login(this.loginEmail, this.loginPassword)
    .then((resultsFromApi) => {
      this.loginEmail = "";
      this.loginPassword = "";
      this.loginErrorMessage = "";

     this.routerThing.navigate(['/camels'])
    })
    // alert('login submitted');
    .catch((err) => {
      const parsedError = err.json();
      this.loginErrorMessage = parsedError.message
    });
  }

  checkLogin() {

  }
}
