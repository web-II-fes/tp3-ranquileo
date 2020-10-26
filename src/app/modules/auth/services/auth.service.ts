import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:3002/api/modules/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean;
  constructor(private http: HttpClient) { }
  public isAutenticado(): boolean{
    return localStorage.getItem('isLogged') === 'true' ? true : false;
//return false;
}



 
login(credentials): Observable<any> {

  return this.http.post(
      AUTH_API + 'login',
      {
          username: credentials.username,
          password: credentials.password
      },
      httpOptions 
  ).pipe(map(x => {
      
      this.isLogged = true;
      localStorage.setItem('isLogged', this.isLogged.toString());
      
      return x;
  }));
}

register(user): Observable<any> {
  return this.http.post(
      AUTH_API + 'registro',
      {
          username: user.username,
          email: user.email,
          password: user.password
      },
      httpOptions
  );
}
}
