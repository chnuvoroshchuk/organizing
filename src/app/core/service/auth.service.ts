import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UserInterface} from '../interface/auth.interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = ''

  constructor(private http: HttpClient) {
  }

  public login(user: UserInterface): Observable<{ token: string, user_id: number }> {

    //TODO: check LOGIN

    return this.http.post<{ token: string, user_id: number }>('/api/login', user)
      .pipe(
        tap(
          ({token, user_id}) => this.setAuthData(token, user_id)
        )
      )
  }

  public logOut() {
    return this.http.post('/api/logout', '')
      .pipe(
        tap(
          () => localStorage.clear()
        )
      )
  }

  private setAuthData(token: string, id: number) {
    localStorage.setItem('userId', id.toString())
    localStorage.setItem('auth-token', token)
    this.token = token
  }

  public getToken(): string {
    const token = localStorage.getItem('auth-token')
    return token ? token : ''
  }

  public tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp
    return Math.floor((new Date()).getTime() / 1000) >= expiry
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getRegistrationConfirmation(token: string) {
    const options = {
      params: new HttpParams().set('token', token)
    }
    return this.http.get('/api/confirm-account' + options);
  }

  sendRequestForRegistration(person: PersonInterface) {
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post('/api/register', body, httpOptions);
  }

}
