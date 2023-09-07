import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-crear-personal',
  templateUrl: './crear-personal.component.html',
  styleUrls: ['./crear-personal.component.scss']
})
export class CrearPersonalComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalCrearPersonal.emit(false)
  }

}
