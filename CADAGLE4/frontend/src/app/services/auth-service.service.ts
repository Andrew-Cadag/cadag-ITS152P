import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn: boolean = false;
  public redirectUrl: string = "";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post<string>("https://localhost:7035/api/login/login", { username, password });
  }
}
