import { Injectable   } from '@angular/core';
import { Http         } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CamelServiceService {

  constructor(
    private http: Http
  ) { }

  //-----------------CREATE CAMEL---------------------
  newCamel(name, color, humps) {
    return this.http
      .post(
        'http://localhost:3000/api/new-camel',
        {
          camelName: name,
          camelColor: color,
          camelHumps: humps
        },
        { withCredentials: true }
        //send the cookies across domains
      )
      .map(res => res.json());
      //parse the json
  }

  //------------------GET CAMELS----------------------
  allCamels() {
    return this.http
      .get(
        'http://localhost:3000/api/camels',
        { withCredentials: true }
      )
      .map(res => res.json());
  }

  //--------------------------------------------------
}
