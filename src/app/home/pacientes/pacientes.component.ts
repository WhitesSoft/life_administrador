import { Component } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes:any = [
    [ 'Juan', 'Montero', 'Poclaba', '75725762' ],
    [ 'Marco', 'Cardozo', 'Izurza', '45454552' ]
  ]

}
