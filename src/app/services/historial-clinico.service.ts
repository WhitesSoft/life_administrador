import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from '../models/Turno';

@Injectable({
  providedIn: 'root'
})
export class HistorialClinicoService {

  historialClinicoURL = '/api/paciente/'

  constructor(
    private httpClient: HttpClient
  ) { }


}
