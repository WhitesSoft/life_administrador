import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paciente } from 'src/app/models/Paciente';
import { ModalsService } from 'src/app/services/modals.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.scss']
})
export class DetallePacienteComponent {

  idPaciente: number;
  subscription: Subscription;
  paciente?: Paciente

  constructor(
    private modalService: ModalsService,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {

    // Obtengo el id del paciente
    this.subscription = this.modalService.$selectedPacienteId.subscribe(id => {
      this.idPaciente = id;
    });

    // obtengo los datos del paciente
    this.pacienteService.obtenerPaciente(this.idPaciente).subscribe(
      data => this.paciente = data,
      err => console.log(err)
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalDetallePaciente.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
