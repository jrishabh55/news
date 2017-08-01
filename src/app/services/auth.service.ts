import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  apiHost: String = 'localhost';
  apiProtocol: String = 'http';
  apiPORT = 3012;

  constructor(private http: Http) {
  }

  registrationUrl() {
    return `${this.apiProtocol}://${this.apiHost}:${this.apiPORT}/api/admin/register`;
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.registrationUrl(), user, {headers: headers})
      .map(res => res.json());
  }

}
