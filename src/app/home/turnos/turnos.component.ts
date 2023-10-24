import { Component } from '@angular/core';
import { Turno } from 'src/app/models/Turno';
import { ModalsService } from 'src/app/services/modals.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent {

  // turnos: any = [
  //   ['10:00 am', 'Juan Montero', 'Si'],
  //   ['11:00 am', 'Juan Montero', 'Si'],
  //   ['12:00 pm', '', ''],
  //   ['14:00 pm', '', ''],
  //   ['15:00 pm', 'Juan Montero', ''],
  //   ['15:00 pm', '', ''],
  //   ['15:00 pm', 'Juan Montero', 'Si'],
  // ]

  turnos: Turno[] = []

  // Estados modal
  modalOpenDetalleTurno = false
  modalOpenCrearTurno = false
  modalOpenModificarTurno = false
  modalOpenEliminarTurno = false

  constructor(
    private modalService: ModalsService,
    private turnoService: TurnoService
  ) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalDetalleTurno.subscribe((data) => { this.modalOpenDetalleTurno = data })
    this.modalService.$modalCrearTurno.subscribe((data) => { this.modalOpenCrearTurno = data })
    this.modalService.$modalModificarTurno.subscribe((data) => { this.modalOpenModificarTurno = data })
    this.modalService.$modalEliminarTurno.subscribe((data) => { this.modalOpenEliminarTurno = data })

    // cargamos la lista
    this.cargarLista()
  }

  cargarLista() {
    this.turnoService.listaTurnos().subscribe(
      data => {
        this.turnos = data
      },
      err => {
        console.log(err);
      }
    )
  }

  openModal(tipo: String) {
    if (tipo === 'ver')
      this.modalOpenDetalleTurno = true

    if (tipo === 'crear')
      this.modalOpenCrearTurno = true

    if (tipo === 'modificar')
      this.modalOpenModificarTurno = true

    if (tipo === 'eliminar')
      this.modalOpenEliminarTurno = true
  }


}
