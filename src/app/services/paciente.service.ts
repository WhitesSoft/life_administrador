import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteURL = '/api/paciente/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // listar pacientes
  public listaPacientes(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.pacienteURL)
  }

}
