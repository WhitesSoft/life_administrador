import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorialAntecedenteHiguiene } from '../models/HistorialAntecedenteHiguiene';

@Injectable({
  providedIn: 'root'
})
export class HistorialAntecedenteHiguieneService {

  antecedenteHiguieneURL = '/api/ahiguiene/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // crear
  public crearAntecedenteHiguiene(idHistorial: number, antecedente: HistorialAntecedenteHiguiene): Observable<any> {
    return this.httpClient.post<any>(this.antecedenteHiguieneURL + `create/${idHistorial}`, antecedente)
  }

  // modificar
  public modificarAntecedenteHiguiene(idHistorial: number, antecedente: HistorialAntecedenteHiguiene): Observable<any> {
    return this.httpClient.put<any>(this.antecedenteHiguieneURL + `update/${idHistorial}`, antecedente)
  }

  // obtener
  public obtenerAntecedenteHiguiene(idHistorial: number): Observable<HistorialAntecedenteHiguiene> {
    return this.httpClient.get<HistorialAntecedenteHiguiene>(this.antecedenteHiguieneURL + `${idHistorial}`)
  }

}
