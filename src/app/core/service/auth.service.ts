import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UserInterface} from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = ''

  constructor(private http: HttpClient) {
  }

  public login(user: UserInterface): Observable<{ token: string, user_id: number }> {

    return this.http.post<{ token: string, user_id: number }>('/api/v1/auth/login', user)
      .pipe(
        tap(
          ({token, user_id}) => this.setAuthData(token, user_id)
        )
      )
  }

  public logOut() {
    return this.http.post('/api/v1/auth/logout', '')
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

}
