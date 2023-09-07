import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.scss']
})
export class EliminarProveedorComponent {
  
  constructor(private modalService: ModalsService) { }

    // Cerrar modal
    closeModal() {
      this.modalService.$modalEliminarProveedor.emit(false)
    }

}
