import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.scss']
})
export class DetalleHistorialComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalDetalleHistorial.emit(false)
  }


}
