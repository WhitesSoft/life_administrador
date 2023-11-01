import { Injectable } from '@angular/core';
import { HistorialIntraoral } from '../models/HistorialIntraoral';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialIntraoralService {

  intraoralURL = '/api/intraoral/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // crear
  public crearIntraoral(idHistorial: number, intraoral: HistorialIntraoral): Observable<any> {
    return this.httpClient.post<any>(this.intraoralURL + `create/${idHistorial}`, intraoral)
  }

  // modificar
  public modificarIntraoral(idHistorial: number, intraoral: HistorialIntraoral): Observable<any> {
    return this.httpClient.put<any>(this.intraoralURL + `update/${idHistorial}`, intraoral)
  }

  // obtener
  public obtenerIntraoral(idHistorial: number): Observable<HistorialIntraoral> {
    return this.httpClient.get<HistorialIntraoral>(this.intraoralURL + `${idHistorial}`)
  }

}
