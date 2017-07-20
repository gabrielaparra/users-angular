import { Injectable   } from '@angular/core';
import { Http         } from @angular/http;
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthServiceService {

  constructor(
    private http: Http
  ) { }

  //-----------------POST SIGNUP---------------------
  signup(fullName, email, password) {
    //information the backend needs to receive for the signup process
    //an argument for each req.body in the API route
    return this.http
      .post(
        'http://localhost:3000/api/signup',
        {
          signupFullname: fullName,
          signupEmail: email,
          signupPassword: password
        },
        //send the cookies across domains
        { withCredentials: true }
      )
      .toPromise()
      //convert from observable to promise
      .then(res => res.json())
      //parse the json
  }

  //------------------POST LOGIN---------------------
  login(email, password) {
    return this.http
      .post(
        'http://localhost:3000/api/login',
        {
          loginEmail: email,
          loginPassword: password
        },
        { withCredentials: true }
      )
      .toPromise()
      //convert from observable to promise
      .then(res => res.json());
      //parse the json
  }

  //------------------POST LOGOUT---------------------
  logout() {
    return this.http
      .post('http://localhost:3000/api/logout',
      {},
      //nothing to send to the back end (req.body) during a logout
      { withCredentials: true }
      //send the cookies across domains
    )
    .toPromise()
    .then(res => res.json());
  }

  //-----------------GET CHECK LOGIN------------------
  checkLogin() {
    return this.http
      .get('http://localhost:3000/api/checklogin',
      { withCredentials: true}
    )
    .toPromise()
    .then(res => res.json());
  }
  //--------------------------------------------------
}
