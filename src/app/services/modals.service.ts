import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  // Paciente
  $selectedPacienteId = new ReplaySubject<number>(1);
  $modalCrearPaciente = new EventEmitter<any>();
  $modalDetallePaciente = new EventEmitter<any>();
  $modalModificarPaciente = new EventEmitter<any>();
  $modalEliminarPaciente = new EventEmitter<any>();

  // Notificacion
  $modalCrearNotificacion = new EventEmitter<any>();

  // Pagos
  $modalRealizarPago = new EventEmitter<any>();
  $modalEmitirFactura = new EventEmitter<any>();

  // Personal
  $selectedPersonalId = new ReplaySubject<number>(1);
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
  $selectedTurnoId = new ReplaySubject<number>(1);
  $modalDetalleTurno = new EventEmitter<any>();
  $modalCrearTurno = new EventEmitter<any>();
  $modalModificarTurno = new EventEmitter<any>();
  $modalEliminarTurno = new EventEmitter<any>();

  // Inventario
  $modalRegistroInventario = new EventEmitter<any>();

  // Horario
  $modalCrearHorario = new EventEmitter<any>();
  $modalModificarHorario = new EventEmitter<any>();

  // Historiales clinicos
  $selectedHistorialId = new ReplaySubject<number>(1);
  $modalDetalleHistorial = new EventEmitter<any>();
  $modalCrearHistorial = new EventEmitter<any>();
  $modalModificarHistorial = new EventEmitter<any>();
  $modalEliminarHistorial = new EventEmitter<any>();

  // Inicio
  $modalRegistrarAtencion = new EventEmitter<any>();

  constructor() { }

}
