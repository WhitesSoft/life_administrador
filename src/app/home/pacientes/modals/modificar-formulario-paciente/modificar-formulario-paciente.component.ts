import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modificar-formulario-paciente',
  templateUrl: './modificar-formulario-paciente.component.html',
  styleUrls: ['./modificar-formulario-paciente.component.scss']
})
export class ModificarFormularioPacienteComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarPaciente.emit(false)
  }


}
