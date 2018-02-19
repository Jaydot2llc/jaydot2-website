import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor() { }

  createUser() {
    console.info('Creating new user...');
  }

}
