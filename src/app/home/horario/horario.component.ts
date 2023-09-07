import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent {

  horarios: any = [
    ['Horario 1', 'Si'],
    ['Horario 2', 'No'],
  ]

  // Estados modal
  modalOpenCrearHorario = false
  modalOpenModificarHorario = false

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalCrearHorario.subscribe((data) => { this.modalOpenCrearHorario = data })
    this.modalService.$modalModificarHorario.subscribe((data) => { this.modalOpenModificarHorario = data })
  }

  openModal(tipo: String) {
   

    if (tipo === 'crear')
      this.modalOpenCrearHorario = true

    if (tipo === 'modificar')
      this.modalOpenModificarHorario = true

  }


}
