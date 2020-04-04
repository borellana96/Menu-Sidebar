import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { StorageKey } from '../storage/storage.model';
import { User } from '../model/user.model';
const { AUTH_TOKEN } = StorageKey

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basePath = 'http://localhost:8080/clinica';   //Aprender manual de las URIS, Login, register
  token: string;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router
  ) {
    this.token = this.storage.readToken(AUTH_TOKEN) || '';
  }

  login(email: string, password: string) {
    return this.http.post(`${this.basePath}/login`, { email, password })
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

  register(user: User) {
    return this.http.post<User>(`${this.basePath}/usuarios`, user)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        });
  }

  logout() {
    let removeToken = localStorage.removeItem('dniPaciente');
    if (removeToken == null) {
      this.router.navigate(['login'], { replaceUrl: true });
    }
  }

  isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken) ? true : false;
  }

  public getToken(): string {
    return this.token;
  }

}
