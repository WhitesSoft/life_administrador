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
   public listaTurnos(): Observable<Turno[]>{
    return this.httpClient.get<Turno[]>(this.turnoURL)
  }
}
