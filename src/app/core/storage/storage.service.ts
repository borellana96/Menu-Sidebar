import { Injectable } from '@angular/core';
import { StorageKey } from './storage.model';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(key: StorageKey, value: any) {
    //window.sessionStorage.removeItem(TOKEN_KEY);
    //window.sessionStorage.setItem(TOKEN_KEY, token);
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  public readToken(key: StorageKey) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }

  public removeToken(key: StorageKey) {
    return localStorage.removeItem(key);
  }

  public clearToken() {
    return localStorage.clear();
  }

}
