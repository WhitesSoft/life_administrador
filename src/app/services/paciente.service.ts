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
  public listaPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacienteURL)
  }

  // crear paciente
  public crearPaciente(paciente: Paciente): Observable<any> {
    return this.httpClient.post<any>(this.pacienteURL + 'create', paciente)
  }

  // obtener paciente
  public obtenerPaciente(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteURL + `${id}`)
  }

  // modificar paciente
  public modificarPaciente(id: number, paciente: Paciente): Observable<any> {
    return this.httpClient.put<any>(this.pacienteURL + `update/${id}`, paciente)
  }

  // eliminar paciente
  public eliminarPaciente(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.pacienteURL + `delete/${id}`)
  }

}
