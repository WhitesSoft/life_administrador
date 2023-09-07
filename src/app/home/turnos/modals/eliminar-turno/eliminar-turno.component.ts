import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-eliminar-turno',
  templateUrl: './eliminar-turno.component.html',
  styleUrls: ['./eliminar-turno.component.scss']
})
export class EliminarTurnoComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEliminarTurno.emit(false)
  }

}
