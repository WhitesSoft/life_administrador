import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modificar-personal',
  templateUrl: './modificar-personal.component.html',
  styleUrls: ['./modificar-personal.component.scss']
})
export class ModificarPersonalComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarPersonal.emit(false)
  }

}
