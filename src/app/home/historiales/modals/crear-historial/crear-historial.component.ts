import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-crear-historial',
  templateUrl: './crear-historial.component.html',
  styleUrls: ['./crear-historial.component.scss']
})
export class CrearHistorialComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalCrearHistorial.emit(false)
  }

}
