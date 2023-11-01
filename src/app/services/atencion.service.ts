import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atencion } from '../models/Atencion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {

  atencionURL = '/api/atencion/'

  constructor(
    private httpClient: HttpClient
  ) { }

  public registrarAtencion(idTurno: number, atencion: Atencion): Observable<any> {
    return this.httpClient.post<any>(this.atencionURL + `create/${idTurno}`, atencion)
  }

}
