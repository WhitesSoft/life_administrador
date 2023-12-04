import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../models/Factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  facturaURL = '/api/factura/'

  constructor(
    private httpClient: HttpClient
  ) { }

  // crear factura
  public crearFactura(idPago: number, factura: Factura): Observable<any> {
    return this.httpClient.post<any>(this.facturaURL + `create/${idPago}`, factura)
  }

}
