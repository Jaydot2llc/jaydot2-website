import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { User } from './model/user.model';

@Injectable()
export class DataStorageService {

  serviceUrl = 'http://www.jaydot2.com:8080/jaydot2/services/';

  constructor(private http: Http) { }

  createUser(user: User) {
    console.info('Creating new user...');
    this.http.post(this.serviceUrl + 'user', user)
      .map(
        (response: Response) => {
          const user: User = response.json();
          return user;
        }
      )
      .subscribe();
  }

}
