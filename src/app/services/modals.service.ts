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

  // Personal
  $modalDetallePersonal = new EventEmitter<any>();
  $modalCrearPersonal = new EventEmitter<any>();
  $modalModificarPersonal = new EventEmitter<any>();
  $modalEliminarPersonal = new EventEmitter<any>();
  $modalControlarAsistencia = new EventEmitter<any>();
  $modalPagosPersonal = new EventEmitter<any>();

  // Proveedor
  $modalDetalleProveedor = new EventEmitter<any>();
  $modalCrearProveedor = new EventEmitter<any>();
  $modalModificarProveedor = new EventEmitter<any>();
  $modalEliminarProveedor = new EventEmitter<any>();

  // Reportes
  $modalReporteSemanal = new EventEmitter<any>();
  $modalReporteMensual = new EventEmitter<any>();

  // Turnos
  $modalDetalleTurno = new EventEmitter<any>();
  $modalCrearTurno = new EventEmitter<any>();
  $modalModificarTurno = new EventEmitter<any>();
  $modalEliminarTurno = new EventEmitter<any>();


  constructor() { }
  
}
