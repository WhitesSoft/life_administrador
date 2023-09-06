import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

  pacientes: any = [
    ['Juan', 'Montero', 'Poclaba', '75725762'],
    ['Marco', 'Cardozo', 'Izurza', '45454552']
  ]

  constructor(private modalService: ModalsService) { }

  // Estados modal
  modalOpenCrearPaciente = false
  modalOpenModificarPaciente = false

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalCrearPaciente.subscribe((data) => { this.modalOpenCrearPaciente = data })
    this.modalService.$modalModificarPaciente.subscribe((data) => { this.modalOpenModificarPaciente = data })
  }

  openModal(tipo: String) {
    // if (tipo === 'ver')
    //   this.modalOpenCrearPaciente = true

    if (tipo === 'crear')
      this.modalOpenCrearPaciente = true

    if (tipo === 'modificar')
      this.modalOpenModificarPaciente = true

    // if (tipo === 'eliminar')
    //   this.modalOpenCrearPaciente = true
  }



}
