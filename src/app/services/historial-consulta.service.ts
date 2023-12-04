import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistorialConsulta } from '../models/HistorialConsulta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialConsultaService {

  consultaURL = '/api/consulta/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // crear
  public crearConsulta(idHistorial: number, consulta: HistorialConsulta): Observable<any> {
    return this.httpClient.post<any>(this.consultaURL + `create/${idHistorial}`, consulta)
  }

  // modificar
  public modificarConsulta(idHistorial: number, consulta: HistorialConsulta): Observable<any> {
    return this.httpClient.put<any>(this.consultaURL + `update/${idHistorial}`, consulta)
  }

  // obtener
  public obtenerConsulta(idHistorial: number): Observable<HistorialConsulta> {
    return this.httpClient.get<HistorialConsulta>(this.consultaURL + `${idHistorial}`)
  }

}
