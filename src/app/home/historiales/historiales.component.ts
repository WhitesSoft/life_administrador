import { Component } from '@angular/core';
import { HistorialClinico } from 'src/app/models/HistorialClinico';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styleUrls: ['./historiales.component.scss']
})
export class HistorialesComponent {

  historiales: HistorialClinico[] = []

  // Estados modal
  modalOpenDetalleHistorial = false
  modalOpenCrearHistorial = false
  modalOpenModificarHistorial = false
  modalOpenEliminarHistorial = false

  constructor(
    private modalService: ModalsService,
    private historialClinicoService: HistorialClinicoService
  ) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalDetalleHistorial.subscribe((data) => { this.modalOpenDetalleHistorial = data })
    this.modalService.$modalCrearHistorial.subscribe((data) => { this.modalOpenCrearHistorial = data })
    this.modalService.$modalModificarHistorial.subscribe((data) => { this.modalOpenModificarHistorial = data })
    this.modalService.$modalEliminarHistorial.subscribe((data) => { this.modalOpenEliminarHistorial = data })

    // listar historiales
    this.cargarLista()
  }

  cargarLista() {
    this.historialClinicoService.listaHistorialesClinicos().subscribe(
      data => {
        this.historiales = data
      },
      err => {
        console.log(err.error.message);
      }
    )
  }

  openModal(tipo: String, idHistorial?: number) {

    if (tipo === 'crear') {
      this.modalOpenCrearHistorial = true
    }

    if (tipo === 'ver') {
      this.modalService.$selectedHistorialId.next(idHistorial!)
      this.modalOpenDetalleHistorial = true
    }

    if (tipo === 'modificar') {
      this.modalService.$selectedHistorialId.next(idHistorial!)
      this.modalOpenModificarHistorial = true
    }

    if (tipo === 'eliminar') {
      this.modalService.$selectedHistorialId.next(idHistorial!)
      this.modalOpenEliminarHistorial = true
    }

  }

}
