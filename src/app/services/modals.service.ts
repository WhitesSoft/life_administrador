import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  // Observable
  $modalRegistrarPaciente = new EventEmitter<any>();

  // Paciente
  $modalDetallePaciente = new EventEmitter<any>();
  $modalCrearPaciente = new EventEmitter<any>();
  $modalModificarPaciente = new EventEmitter<any>();
  $modalEliminarPaciente = new EventEmitter<any>();

  // Notificacion
  $modalCrearNotificacion = new EventEmitter<any>();

  // Pagos
  $modalRealizarPago = new EventEmitter<any>();
  $modalEmitirFactura = new EventEmitter<any>();

  constructor() { }
  
}
