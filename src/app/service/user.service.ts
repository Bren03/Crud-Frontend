import { Injectable } from '@angular/core';

// Use to make function Observable
import { Observable, of } from 'rxjs';

// Import User data from respective folders
import { User } from '../User';

import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private webReqService: WebrequestService) {}

  createUser(user: User) {
    console.log('create a user');
    // Send web request to create client
    return this.webReqService.post('users/signup', user);
  }

  // 'Client validation failed: idNum: Path `idNum` is required., cellphoneNum: Path `cellphoneNum` is required.';

  // Function used to get client information
  getUsers(): Observable<any> {
    // Used to make CLIENTS a Observable
    // const clients = of(CLIENTS);
    // Returns clients

    const users = this.webReqService.get('users');
    return users;
  }

  deleteUserID(id: any) {
    // Used to make CLIENTS a Observable
    // const clients = of(CLIENTS);
    // Returns clients
    return this.webReqService.delete(`users/${id}`);
  }

  editUser(user: User) {
    console.log('Edit a User');
    // Send web request to edit User
    console.log(user._id);
    return this.webReqService.patch(`users/${user._id}`, user);
  }
}
