import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'pacientes', component: PacientesComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'personal', component: PersonalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

