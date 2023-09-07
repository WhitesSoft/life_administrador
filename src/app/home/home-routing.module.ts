import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'pacientes', component: PacientesComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

