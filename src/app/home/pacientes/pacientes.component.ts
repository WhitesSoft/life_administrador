import { Component } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { ModalsService } from 'src/app/services/modals.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes: Paciente[] = []
  buscar = '';

  // Estados modal
  modalOpenDetallePaciente = false
  modalOpenCrearPaciente = false
  modalOpenModificarPaciente = false
  modalOpenEliminarPaciente = false

  constructor(
    private modalService: ModalsService,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {

    // Escuchamos el observable del modal
    this.modalService.$modalDetallePaciente.subscribe((data) => { this.modalOpenDetallePaciente = data })
    this.modalService.$modalCrearPaciente.subscribe((data) => { this.modalOpenCrearPaciente = data })
    this.modalService.$modalModificarPaciente.subscribe((data) => { this.modalOpenModificarPaciente = data })
    this.modalService.$modalEliminarPaciente.subscribe((data) => { this.modalOpenEliminarPaciente = data })

    // cargar lista
    this.cargarLista()
  }

  cargarLista() {
    this.pacienteService.listaPacientes().subscribe(
      data => {
        this.pacientes = data
      },
      err => {
        console.log(err);
      }
    )
  }

  openModal(tipo: String, idPaciente?: number) {

    if (tipo === 'crear') {
      this.modalOpenCrearPaciente = true
    }
    if (tipo === 'ver') {
      this.modalService.$selectedPacienteId.next(idPaciente!)
      this.modalOpenDetallePaciente = true
    }
    if (tipo === 'modificar') {
      this.modalService.$selectedPacienteId.next(idPaciente!)
      this.modalOpenModificarPaciente = true
    }
    if (tipo === 'eliminar') {
      this.modalService.$selectedPacienteId.next(idPaciente!)
      this.modalOpenEliminarPaciente = true
    }

  }

}
