import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newRequest = request.clone();

    return next.handle(newRequest).pipe(
      catchError((httpError: HttpErrorResponse) => {
        let error = httpError.error.message;

        let errorMessage = error;

        if (Array.isArray(error) && error.length) {
          errorMessage = error[0];
        }

        window.alert(errorMessage);

        return throwError(errorMessage);
      })
    );
  }
}
