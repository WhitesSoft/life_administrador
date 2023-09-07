import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-pagos-personal',
  templateUrl: './pagos-personal.component.html',
  styleUrls: ['./pagos-personal.component.scss']
})
export class PagosPersonalComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalPagosPersonal.emit(false)
  }

}
