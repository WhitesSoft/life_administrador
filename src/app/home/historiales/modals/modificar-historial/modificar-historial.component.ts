import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modificar-historial',
  templateUrl: './modificar-historial.component.html',
  styleUrls: ['./modificar-historial.component.scss']
})
export class ModificarHistorialComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarHistorial.emit(false)
  }


}
