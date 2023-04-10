import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

const BASE_URL = 'http://192.168.0.107'

@Injectable()

export class TokenInterceptor implements HttpInterceptor{
  constructor(private auth: AuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ url: `${BASE_URL}${req.url}` });

    if (this.auth.isAuthenticated()) {
      req = req.clone({
        url: `${BASE_URL}${req.url}`,
        setHeaders: {
          Authorization: this.auth.getToken()
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
    if (error.status === 403) {
      this.router.navigate(['/'], {
          queryParams: {
            sessionFailed: true
          }
        }
      )}

    return throwError(error)
  }
}
