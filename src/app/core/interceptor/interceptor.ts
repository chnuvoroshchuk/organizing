import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

const BASE_URL = 'http://localhost:8080';

@Injectable()

export class TokenInterceptor implements HttpInterceptor{
  constructor(private auth: AuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req)
    req = req.clone({ url: `${BASE_URL}${req.url}`, headers: new HttpHeaders
      ({
        ...(req.url.includes('/upload/') ? {} : {'Content-Type': 'application/json'}),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',}) });

    if (this.auth.isAuthenticated()) {
      req = req.clone({
        url: req.url,
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      })
    }

    return next.handle(req).pipe(
      catchError(
        (error: HttpErrorResponse) =>  this.handleAuthError(error)
      )
    )
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 403 && !error.url?.includes('/api/login?username=')) {
      this.router.navigate(['/'], {
          queryParams: {
            sessionFailed: true
          }
        }
      )}

    return throwError(error)
  }
}
