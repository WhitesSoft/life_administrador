import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modificar-turno',
  templateUrl: './modificar-turno.component.html',
  styleUrls: ['./modificar-turno.component.scss']
})
export class ModificarTurnoComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarTurno.emit(false)
  }

}
