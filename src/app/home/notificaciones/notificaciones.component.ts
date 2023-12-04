import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {

  notificaciones: any = [
    ['Hora de atención 12:34 pm', 'Juan Montero'],
    ['Hora de atención 08:51 am', 'Marco Cardozo']
  ]

    // Estados modal
    modalOpenCrearNotificacion = false

  constructor(private modalService: ModalsService) { 
     // Escuchamos el observable del modal
     this.modalService.$modalCrearNotificacion.subscribe((data) => { this.modalOpenCrearNotificacion = data })
  }



  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalCrearPaciente.subscribe((data) => { this.modalOpenCrearNotificacion = data })
  }

  openModal(tipo: String) {
    if (tipo === 'crear')
      this.modalOpenCrearNotificacion = true
  }



}
