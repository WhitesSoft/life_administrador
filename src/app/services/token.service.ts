import { Injectable } from '@angular/core';

  //Constantes de sesion storage
  const USUARIO_KEY = 'Usuario';
  const TOKEN_KEY = 'Token';
  const CORREO_KEY = 'Correo';
  const ROLES_KEY = 'Roles';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

    //Getters and Setters
    public setToken(token: string): void {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): String{
      return window.sessionStorage.getItem(TOKEN_KEY)!;
    }

    public setUsuario(usuario: string): void {
      window.sessionStorage.removeItem(USUARIO_KEY);
      window.sessionStorage.setItem(USUARIO_KEY, usuario);
    }

    public getUsuario(): String{
      return window.sessionStorage.getItem(USUARIO_KEY)!;
    }

    public setCorreo(correo: string): void {
      window.sessionStorage.removeItem(CORREO_KEY);
      window.sessionStorage.setItem(CORREO_KEY, correo);
    }

    public getCorreo(): String{
      return window.sessionStorage.getItem(CORREO_KEY)!;
    }

    public setRoles(roles: String[]): void {
      window.sessionStorage.removeItem(ROLES_KEY);
      window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(roles));
    }

    public getAuthorities(): String[] {
      const roles: String[] = [];
      if(sessionStorage.getItem(ROLES_KEY)){
        JSON.parse(sessionStorage.getItem(ROLES_KEY)!).forEach((rol: string) => {
          roles.push(rol)
        })
      }
      return roles;
    }

    public cerrarSesion(): void {
      window.sessionStorage.clear();
    }

}
