import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-controlar-asistencia',
  templateUrl: './controlar-asistencia.component.html',
  styleUrls: ['./controlar-asistencia.component.scss']
})
export class ControlarAsistenciaComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalControlarAsistencia.emit(false)
  }

}
