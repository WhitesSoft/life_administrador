import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modificar-horario',
  templateUrl: './modificar-horario.component.html',
  styleUrls: ['./modificar-horario.component.scss']
})
export class ModificarHorarioComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarHorario.emit(false)
  }


}
