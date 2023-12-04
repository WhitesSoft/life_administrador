import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistorialAntecedenteSalud } from '../models/HIstorialAntecedenteSalud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialAntecedenteSaludService {

  antecedenteSaludURL = '/api/asalud/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // crear
  public crearAntecedenteSalud(idHistorial: number, antecedente: HistorialAntecedenteSalud): Observable<any> {
    return this.httpClient.post<any>(this.antecedenteSaludURL + `create/${idHistorial}`, antecedente)
  }

  // modificar
  public modificarAntecedenteSalud(idHistorial: number, antecedente: HistorialAntecedenteSalud): Observable<any> {
    return this.httpClient.put<any>(this.antecedenteSaludURL + `update/${idHistorial}`, antecedente)
  }

  // obtener
  public obtenerAntecedenteSalud(idHistorial: number): Observable<HistorialAntecedenteSalud> {
    return this.httpClient.get<HistorialAntecedenteSalud>(this.antecedenteSaludURL + `${idHistorial}`)
  }

}


