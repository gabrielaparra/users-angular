import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-camel-list',
  templateUrl: './camel-list.component.html',
  styleUrls: ['./camel-list.component.css']
})

export class CamelListComponent implements OnInit {

  currentUser: any = {}

  constructor(
    private authThing: AuthServiceService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.authThing.checkLogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
      })
      .catch(() => {
        this.routerThing.navigate(['/']);
      });
  }

}
