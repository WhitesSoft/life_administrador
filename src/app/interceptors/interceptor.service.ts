import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;
    const token = this.tokenService.getToken();

    //comprobamos si hay token en session storage
    if(token != null){
      authReq = req.clone({headers: req.headers.set('x-access-token', token.toString())});
    }

    return next.handle(authReq);

  }

}


export const interceptorProvider = [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } ]
