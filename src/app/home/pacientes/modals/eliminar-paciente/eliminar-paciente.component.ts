import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.scss']
})
export class EliminarPacienteComponent {

  constructor(private modalService: ModalsService) { }

    // Cerrar modal
    closeModal() {
      this.modalService.$modalEliminarPaciente.emit(false)
    }

}
