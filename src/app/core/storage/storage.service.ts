import { Injectable } from '@angular/core';
import { StorageKey } from './storage.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(key: StorageKey, value: any) {
    //window.sessionStorage.removeItem(TOKEN_KEY);
    //window.sessionStorage.setItem(TOKEN_KEY, token);
    //value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  public readToken(key: StorageKey): string {
    //const value = localStorage.getItem(key);
    //return JSON.parse(value);
    return localStorage.getItem(key);
  }

  public removeToken(key: StorageKey) {
    return localStorage.removeItem(key);
  }

  public clearToken() {
    return localStorage.clear();
  }

}
