import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styleUrls: ['./historiales.component.scss']
})
export class HistorialesComponent {

  historiales: any = [
    ['Juan Montero'],
    ['Marco Cardozo'],
  ]

  // Estados modal
  modalOpenDetalleHistorial = false
  modalOpenCrearHistorial = false
  modalOpenModificarHistorial = false
  modalOpenEliminarHistorial = false

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalDetalleHistorial.subscribe((data) => { this.modalOpenDetalleHistorial = data })
    this.modalService.$modalCrearHistorial.subscribe((data) => { this.modalOpenCrearHistorial = data })
    this.modalService.$modalModificarHistorial.subscribe((data) => { this.modalOpenModificarHistorial = data })
    this.modalService.$modalEliminarHistorial.subscribe((data) => { this.modalOpenEliminarHistorial = data })
  }

  openModal(tipo: String) {
    if (tipo === 'ver')
      this.modalOpenDetalleHistorial = true

    if (tipo === 'crear')
      this.modalOpenCrearHistorial = true

    if (tipo === 'modificar')
      this.modalOpenModificarHistorial = true

    if (tipo === 'eliminar')
      this.modalOpenEliminarHistorial = true
  }

}
