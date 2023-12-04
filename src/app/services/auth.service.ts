import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/JwtDto';
import { LoginUsuario } from '../models/LoginUsuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = '/api/auth/login'

  constructor(private httpClient: HttpClient) { }

  // Iniciar sesion
  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL, loginUsuario)
  }

}
