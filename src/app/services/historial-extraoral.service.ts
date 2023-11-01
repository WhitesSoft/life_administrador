import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorialExtraoral } from '../models/HIstorialExtraoral';

@Injectable({
  providedIn: 'root'
})
export class HistorialExtraoralService {

  extraoralURL = '/api/extraoral/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // crear
  public crearExtraoral(idHistorial: number, extraoral: HistorialExtraoral): Observable<any> {
    return this.httpClient.post<any>(this.extraoralURL + `create/${idHistorial}`, extraoral)
  }

  // modificar
  public modificarExtraoral(idHistorial: number, extraoral: HistorialExtraoral): Observable<any> {
    return this.httpClient.put<any>(this.extraoralURL + `update/${idHistorial}`, extraoral)
  }

  // obtener
  public obtenerExtraoral(idHistorial: number): Observable<HistorialExtraoral> {
    return this.httpClient.get<HistorialExtraoral>(this.extraoralURL + `${idHistorial}`)
  }

}
