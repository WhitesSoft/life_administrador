import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-eliminar-historial',
  templateUrl: './eliminar-historial.component.html',
  styleUrls: ['./eliminar-historial.component.scss']
})
export class EliminarHistorialComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEliminarHistorial.emit(false)
  }

}
