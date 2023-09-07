import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-eliminar-personal',
  templateUrl: './eliminar-personal.component.html',
  styleUrls: ['./eliminar-personal.component.scss']
})
export class EliminarPersonalComponent {


  constructor(private modalService: ModalsService) { }

    // Cerrar modal
    closeModal() {
      this.modalService.$modalEliminarPersonal.emit(false)
    }

}
