import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent {

  proveedor: any = [
    ['Juan Montero'],
    ['Marco Cardozo'],
    ['Ruben Mealla'],
  ]

  // Estados modal
  modalOpenDetalleProveedor = false
  modalOpenCrearProveedor = false
  modalOpenModificarProveedor = false
  modalOpenEliminarProveedor = false
 

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalDetalleProveedor.subscribe((data) => { this.modalOpenDetalleProveedor = data })
    this.modalService.$modalCrearProveedor.subscribe((data) => { this.modalOpenCrearProveedor = data })
    this.modalService.$modalModificarProveedor.subscribe((data) => { this.modalOpenModificarProveedor = data })
    this.modalService.$modalEliminarProveedor.subscribe((data) => { this.modalOpenEliminarProveedor = data })

  }

  openModal(tipo: String) {
    if (tipo === 'ver')
      this.modalOpenDetalleProveedor = true

    if (tipo === 'crear')
      this.modalOpenCrearProveedor = true

    if (tipo === 'modificar')
      this.modalOpenModificarProveedor = true

    if (tipo === 'eliminar')
      this.modalOpenEliminarProveedor = true

  }

}
