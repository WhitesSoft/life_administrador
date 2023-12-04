import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from '../models/Turno';
import { HistorialClinico } from '../models/HistorialClinico';

@Injectable({
  providedIn: 'root'
})
export class HistorialClinicoService {

  historialClinicoURL = '/api/historial/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // listar historiales
  public listaHistorialesClinicos(): Observable<HistorialClinico[]> {
    return this.httpClient.get<HistorialClinico[]>(this.historialClinicoURL)
  }

  // actualizar historial
  public actualizarHistorial(idHistorial: number, historial: HistorialClinico): Observable<any> {
    return this.httpClient.put<any>(this.historialClinicoURL + `update/${idHistorial}`, historial)
  }

  // ver historial
  public verHistorial(idHistorial: number): Observable<HistorialClinico> {
    return this.httpClient.get<HistorialClinico>(this.historialClinicoURL + `${idHistorial}`)
  }

  // eliminar historial
  public eliminarHistorial(idHistorial: number): Observable<any> {
    return this.httpClient.delete<any>(this.historialClinicoURL + `delete/${idHistorial}`)
  }

}
