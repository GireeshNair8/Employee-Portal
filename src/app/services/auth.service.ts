import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged(){
    /*Return boolean value*/
    return !!localStorage.getItem("name")
  }
}
