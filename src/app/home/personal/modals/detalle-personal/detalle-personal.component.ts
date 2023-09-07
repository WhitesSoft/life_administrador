import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-detalle-personal',
  templateUrl: './detalle-personal.component.html',
  styleUrls: ['./detalle-personal.component.scss']
})
export class DetallePersonalComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalDetallePersonal.emit(false)
  }

}
