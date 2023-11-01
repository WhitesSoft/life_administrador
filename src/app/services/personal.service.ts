import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personal } from '../models/Personal';
import { Usuario_Asistente } from '../models/Usuario_Asistente';
import { Usuario_Secretaria } from '../models/Usuario_Secretaria';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  personalURL = '/api/personal/'

  constructor(
    private httpClient: HttpClient
  ) { }


  // Listar todo el personal
  public listaPersonal(): Observable<Personal[]> {
    return this.httpClient.get<Personal[]>(this.personalURL)
  }

  // registra personal asistente
  public registrarPersonalAsistente(asistente: Usuario_Asistente): Observable<any> {
    return this.httpClient.post<any>(this.personalURL + 'registrarasistente', asistente)
  }

  // registra personal secretaria
  public registrarPersonalSecretaria(secretaria: Usuario_Secretaria): Observable<any> {
    return this.httpClient.post<any>(this.personalURL + 'registrarsecretaria', secretaria)
  }


  // info personal
  public obtenerPersonal(idPersonal: number): Observable<Personal> {
    return this.httpClient.get<Personal>(this.personalURL + `${idPersonal}`)
  }

  // // modificar turno
  // public modificarTurno(idTurno: number, turno: Turno): Observable<any>{
  //   return this.httpClient.put<any>(this.turnoURL + `update/${idTurno}`, turno)
  // }

  // eliminar personal
  public eliminarPersonal(idPersonal: number): Observable<any> {
    return this.httpClient.delete<any>(this.personalURL + `delete/${idPersonal}`)
  }
}
