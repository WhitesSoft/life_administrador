import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-crear-turno',
  templateUrl: './crear-turno.component.html',
  styleUrls: ['./crear-turno.component.scss']
})
export class CrearTurnoComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalCrearTurno.emit(false)
  }

}
