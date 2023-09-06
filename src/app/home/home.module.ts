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
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ]
})
export class HomeModule { }
