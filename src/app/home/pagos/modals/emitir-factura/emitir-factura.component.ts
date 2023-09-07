import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-emitir-factura',
  templateUrl: './emitir-factura.component.html',
  styleUrls: ['./emitir-factura.component.scss']
})
export class EmitirFacturaComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEmitirFactura.emit(false)
  }


}
