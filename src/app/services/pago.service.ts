import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetallePago } from '../models/DetallePago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  pagosURL = '/api/pagos/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // Listar pagos
  public listaPagos(): Observable<DetallePago[]> {
    return this.httpClient.get<DetallePago[]>(this.pagosURL)
  }

  // info pago
  public obtenerPago(idPago: number): Observable<DetallePago> {
    return this.httpClient.get<DetallePago>(this.pagosURL + `${idPago}`)
  }
}
