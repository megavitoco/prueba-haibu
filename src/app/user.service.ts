import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  public getUsers() {
    return this.http.get('https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user ');
  }
}
