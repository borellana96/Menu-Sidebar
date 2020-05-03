import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { StorageKey } from '../storage/storage.model';
import { User } from '../model/user.model';
import { JwtResponse } from '../model/jwtResponse.model';
import { environment } from 'src/environments/environment';
const { AUTH_TOKEN } = StorageKey

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basePath = `${environment.baseUrl}/auth`;   //Aprender manual de las URIS, Login, register
  //token: string;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router
  ) {
    //this.token = this.storage.readToken(AUTH_TOKEN) || '';
  }

  login(user: User) {
    return this.http.post<JwtResponse>(`${this.basePath}/signin`, user)
      .subscribe(
        res => {
          this.storage.saveToken(AUTH_TOKEN, res.accesToken);
          this.router.navigate(['navside'], { replaceUrl: true });
        },
        err => {
          console.log(err);
        }
      );
  }

  register(user: User) {
    return this.http.post<User>(`${this.basePath}/signup`, user)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

  logout() {
    let removeToken = localStorage.removeItem(AUTH_TOKEN);
    if (removeToken == null) {
      this.router.navigate(['login'], { replaceUrl: true });
    }
  }

  isLoggedIn(): boolean {
    //let authToken = this.getToken();
    let authToken = this.storage.readToken(AUTH_TOKEN);
    return (authToken) ? true : false;
  }

  /*public getToken(): string {
    return this.token;
    //return this.storage.readToken(AUTH_TOKEN);
  }*/

}
