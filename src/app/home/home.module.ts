import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeRoutingModule } from './home-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormularioPacienteComponent } from './pacientes/modals/formulario-paciente/formulario-paciente.component';
import { DetallePacienteComponent } from './pacientes/modals/detalle-paciente/detalle-paciente.component';
import { EliminarPacienteComponent } from './pacientes/modals/eliminar-paciente/eliminar-paciente.component';
import { ModificarFormularioPacienteComponent } from './pacientes/modals/modificar-formulario-paciente/modificar-formulario-paciente.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CrearNotificacionComponent } from './notificaciones/modals/crear-notificacion/crear-notificacion.component';
import { PagosComponent } from './pagos/pagos.component';
import { RealizarPagoComponent } from './pagos/modals/realizar-pago/realizar-pago.component';
import { EmitirFacturaComponent } from './pagos/modals/emitir-factura/emitir-factura.component';
import { PersonalComponent } from './personal/personal.component';
import { PagosPersonalComponent } from './personal/modals/pagos-personal/pagos-personal.component';
import { ControlarAsistenciaComponent } from './personal/modals/controlar-asistencia/controlar-asistencia.component';
import { CrearPersonalComponent } from './personal/modals/crear-personal/crear-personal.component';
import { ModificarPersonalComponent } from './personal/modals/modificar-personal/modificar-personal.component';
import { EliminarPersonalComponent } from './personal/modals/eliminar-personal/eliminar-personal.component';
import { DetallePersonalComponent } from './personal/modals/detalle-personal/detalle-personal.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { DetalleProveedorComponent } from './proveedor/modals/detalle-proveedor/detalle-proveedor.component';
import { CrearProveedorComponent } from './proveedor/modals/crear-proveedor/crear-proveedor.component';
import { ModificarProveedorComponent } from './proveedor/modals/modificar-proveedor/modificar-proveedor.component';
import { EliminarProveedorComponent } from './proveedor/modals/eliminar-proveedor/eliminar-proveedor.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteMensualComponent } from './reportes/modals/reporte-mensual/reporte-mensual.component';
import { ReporteSemanalComponent } from './reportes/modals/reporte-semanal/reporte-semanal.component';
import { TurnosComponent } from './turnos/turnos.component';
import { CrearTurnoComponent } from './turnos/modals/crear-turno/crear-turno.component';
import { DetalleTurnoComponent } from './turnos/modals/detalle-turno/detalle-turno.component';
import { ModificarTurnoComponent } from './turnos/modals/modificar-turno/modificar-turno.component';
import { EliminarTurnoComponent } from './turnos/modals/eliminar-turno/eliminar-turno.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegistrarComponent } from './inventario/modals/registrar/registrar.component';
import { HorarioComponent } from './horario/horario.component';
import { CrearHorarioComponent } from './horario/modals/crear-horario/crear-horario.component';
import { ModificarHorarioComponent } from './horario/modals/modificar-horario/modificar-horario.component';
import { HistorialesComponent } from './historiales/historiales.component';
import { CrearHistorialComponent } from './historiales/modals/crear-historial/crear-historial.component';
import { DetalleHistorialComponent } from './historiales/modals/detalle-historial/detalle-historial.component';
import { ModificarHistorialComponent } from './historiales/modals/modificar-historial/modificar-historial.component';
import { EliminarHistorialComponent } from './historiales/modals/eliminar-historial/eliminar-historial.component';
import { RegistrarAtencionComponent } from './inicio/modals/registrar-atencion/registrar-atencion.component';
import { ModalsService } from '../services/modals.service';
import { PacientesPipe } from '../pipes/pacientes.pipe';



@NgModule({
  declarations: [
    InicioComponent,
    PacientesComponent,
    FormularioPacienteComponent,
    DetallePacienteComponent,
    EliminarPacienteComponent,
    ModificarFormularioPacienteComponent,
    NotificacionesComponent,
    CrearNotificacionComponent,
    PagosComponent,
    RealizarPagoComponent,
    EmitirFacturaComponent,
    PersonalComponent,
    PagosPersonalComponent,
    ControlarAsistenciaComponent,
    CrearPersonalComponent,
    ModificarPersonalComponent,
    EliminarPersonalComponent,
    DetallePersonalComponent,
    ProveedorComponent,
    DetalleProveedorComponent,
    CrearProveedorComponent,
    ModificarProveedorComponent,
    EliminarProveedorComponent,
    ReportesComponent,
    ReporteMensualComponent,
    ReporteSemanalComponent,
    TurnosComponent,
    CrearTurnoComponent,
    DetalleTurnoComponent,
    ModificarTurnoComponent,
    EliminarTurnoComponent,
    InventarioComponent,
    RegistrarComponent,
    HorarioComponent,
    CrearHorarioComponent,
    ModificarHorarioComponent,
    HistorialesComponent,
    CrearHistorialComponent,
    DetalleHistorialComponent,
    ModificarHistorialComponent,
    EliminarHistorialComponent,
    RegistrarAtencionComponent,
    PacientesPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    ModalsService
  ]
})
export class HomeModule { }
