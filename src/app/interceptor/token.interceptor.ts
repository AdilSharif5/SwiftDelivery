import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //checking accesstoken in session storage
    if (sessionStorage.getItem('jwtToken') && request.url.includes('/Document/')) {
      request = this.addToken(request, sessionStorage.getItem('jwtToken') || '');
    }

    //checking error
    return next.handle(request).pipe(catchError((error: any) => {
      if ((error instanceof HttpErrorResponse && error.status === 401) || !error) {
        return this.handle401Error(request, next);
      } else {
        return throwError(() => { return error });
      }
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    window.location.href = '/#/home';
    sessionStorage.clear();
    return throwError(() => { return "No Login" });
  }

  //authorization header
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': token?`Bearer ${token}`:'',
        'AccessToken': token?`${token}`:'',
      }
    });
  }

}