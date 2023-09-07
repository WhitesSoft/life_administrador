import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PagosComponent } from './pagos/pagos.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'pacientes', component: PacientesComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'pagos', component: PagosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

