import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authEndpoint = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const credentials = { login:username, password };
    // return this.http.post(this.authEndpoint, credentials);
    return this.http.get(`${this.authEndpoint}?login=${username}&password=${password}`);
  }
}
