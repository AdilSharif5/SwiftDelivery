import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UnhandledExceptionsHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error: any) {
    const title = '[Unhandled Exception Handler]';
    if (!error) {
      console.warn(`${title} Unknown error`);
      return;
    }
    if(error.message && !error.message.match('Expression has changed after it was checked. Previous value')) {
        console.error(title, error);
    }
    if (error instanceof HttpErrorResponse) {
      const response: HttpErrorResponse = error;
      
    } else {
      
    }
  }
}