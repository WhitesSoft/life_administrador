import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  personal: any = [
    ['Juan Montero'],
    ['Marco Cardozo'],
    ['Ruben Mealla'],
  ]

  // Estados modal
  modalOpenDetallePersonal = false
  modalOpenCrearPersonal = false
  modalOpenModificarPersonal = false
  modalOpenEliminarPersonal = false
  modalOpenControlarAsistencia = false
  modalOpenPagosPersonal = false

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalDetallePersonal.subscribe((data) => { this.modalOpenDetallePersonal = data })
    this.modalService.$modalCrearPersonal.subscribe((data) => { this.modalOpenCrearPersonal = data })
    this.modalService.$modalModificarPersonal.subscribe((data) => { this.modalOpenModificarPersonal = data })
    this.modalService.$modalEliminarPersonal.subscribe((data) => { this.modalOpenEliminarPersonal = data })
    this.modalService.$modalControlarAsistencia.subscribe((data) => { this.modalOpenControlarAsistencia = data })
    this.modalService.$modalPagosPersonal.subscribe((data) => { this.modalOpenPagosPersonal = data })
  }

  openModal(tipo: String) {
    if (tipo === 'ver')
      this.modalOpenDetallePersonal = true

    if (tipo === 'crear')
      this.modalOpenCrearPersonal = true

    if (tipo === 'modificar')
      this.modalOpenModificarPersonal = true

    if (tipo === 'eliminar')
      this.modalOpenEliminarPersonal = true

    if (tipo === 'controlar')
      this.modalOpenControlarAsistencia = true

    if (tipo === 'pagos')
      this.modalOpenPagosPersonal = true

  }

}
