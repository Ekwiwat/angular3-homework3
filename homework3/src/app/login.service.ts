import { Injectable } from '@angular/core';
import { AdminAccount } from './admin-account'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getAminAccount(): AdminAccount[] {
    return [
      {
        username: 'admin@yourstore.com',
        password: 'admin'
      }
    ]
  }


}
