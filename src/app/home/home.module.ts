import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeRoutingModule } from './home-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ModalInicioComponent } from './modals/modal-inicio/modal-inicio.component';
import { ModalHistorialClinicoComponent } from './modals/modal-historial-clinico/modal-historial-clinico.component';
import { ModalPacienteComponent } from './modals/modal-paciente/modal-paciente.component';
import { FormularioPacienteComponent } from './pacientes/modals/formulario-paciente/formulario-paciente.component';
import { DetallePacienteComponent } from './pacientes/modals/detalle-paciente/detalle-paciente.component';
import { EliminarPacienteComponent } from './pacientes/modals/eliminar-paciente/eliminar-paciente.component';
import { ModificarFormularioPacienteComponent } from './pacientes/modals/modificar-formulario-paciente/modificar-formulario-paciente.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CrearNotificacionComponent } from './notificaciones/modals/crear-notificacion/crear-notificacion.component';
import { PagosComponent } from './pagos/pagos.component';
import { RealizarPagoComponent } from './pagos/modals/realizar-pago/realizar-pago.component';
import { EmitirFacturaComponent } from './pagos/modals/emitir-factura/emitir-factura.component';



@NgModule({
  declarations: [
    InicioComponent,
    PacientesComponent,
    ModalInicioComponent,
    ModalHistorialClinicoComponent,
    ModalPacienteComponent,
    FormularioPacienteComponent,
    DetallePacienteComponent,
    EliminarPacienteComponent,
    ModificarFormularioPacienteComponent,
    NotificacionesComponent,
    CrearNotificacionComponent,
    PagosComponent,
    RealizarPagoComponent,
    EmitirFacturaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ]
})
export class HomeModule { }
