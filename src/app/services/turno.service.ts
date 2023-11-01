import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turno } from '../models/Turno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  turnoURL = '/api/turno/'

  constructor(
    private httpClient: HttpClient
  ) { }


  // Listar todos los turnos
  public listaTurnos(): Observable<Turno[]> {
    return this.httpClient.get<Turno[]>(this.turnoURL)
  }

  // asignar turno
  public registrarTurno(idPaciente: number, turno: Turno): Observable<any> {
    return this.httpClient.post<any>(this.turnoURL + `create/${idPaciente}`, turno)
  }

  // info turno
  public obtenerTurno(idTurno: number): Observable<Turno> {
    return this.httpClient.get<Turno>(this.turnoURL + `${idTurno}`)
  }

  // modificar turno
  public modificarTurno(idTurno: number, turno: Turno): Observable<any>{
    return this.httpClient.put<any>(this.turnoURL + `update/${idTurno}`, turno)
  }

  // eliminar turno
  public eliminarTurno(idTurno: number): Observable<any>{
    return this.httpClient.delete<any>(this.turnoURL + `delete/${idTurno}`)
  }

}
