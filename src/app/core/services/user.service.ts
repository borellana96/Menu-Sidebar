import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'http://localhost:8080/api/clinica/usuarios';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.path);
  }

  register(user: User) {
    return this.http.post<User>(this.path, user);
  }

}
