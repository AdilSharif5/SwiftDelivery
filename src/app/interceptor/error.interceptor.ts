import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
            this.toastrService.error(errorMsg, 'Client Error');
          }
          else {
            if (error.status == 400) { //Bad Request
              let message = error.error;
              this.toastrService.error(message ? message : 'Something Went Wrong!!', 'Error');
            }
            else if (error.status == 405) { //Method not allowed (Just providing info to the user)
              let message = error.error;
              this.toastrService.info(message, 'Information');
            }
            else if (error.status == 500) { //Bad Request
              // let message = error.error;
              this.toastrService.error('Internal Server Error', 'Error');
            }
            else {
              errorMsg = `Error Code: ${error.error.status},  Message: ${error.error.message}`;
              this.toastrService.error(errorMsg, 'Error');
            }
          }
          return throwError(errorMsg);
        })
      )
  }
}
