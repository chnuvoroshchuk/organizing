import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserInterface } from '../interface/auth.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';

  constructor(private http: HttpClient) {}

  public login(
    user: UserInterface
  ): Observable<{ access_token: string; refresh_token: string }> {
    return this.http
      .post<{
        access_token: string;
        refresh_token: string;
      }>(`/api/login?username=${user.username}&password=${user.password}`, {})
      .pipe(
        tap(({ access_token, refresh_token }) =>
          this.setAuthData(access_token, refresh_token)
        )
      );
  }

  public logOut() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap(() => localStorage.clear()));
  }

  public getToken(): string {
    const token = localStorage.getItem('sessionToken');
    return token ? token : '';
  }

  public tokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getRegistrationConfirmation(token: string) {
    const options = {
      params: new HttpParams().set('token', token),
    };
    console.log('zalupa');
    return this.http.get('/api/confirm-account', options);
  }

  sendRequestForRegistration(person: PersonInterface) {
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post('/api/register', body, httpOptions);
  }

  private setAuthData(sessionToken: string, refreshToken: string) {
    localStorage.setItem('sessionToken', sessionToken);
    localStorage.setItem('refreshToken', refreshToken);
    this.token = sessionToken;
  }
}
