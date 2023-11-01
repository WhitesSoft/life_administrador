import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ModalsService } from 'src/app/services/modals.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.scss']
})
export class EliminarPacienteComponent {


  idPaciente: number;
  subscription: Subscription;

  constructor(
    private modalService: ModalsService,
    private pacienteService: PacienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Obtengo el id del paciente
    this.subscription = this.modalService.$selectedPacienteId.subscribe(id => {
      this.idPaciente = id;
    });
  }

  eliminarPaciente() {
    this.pacienteService.eliminarPaciente(this.idPaciente).subscribe(
      data => {
        this.toastr.success(data)
        this.closeModal()
      },
      err => {
        console.log(err);
      }
    )
  }


  // Cerrar modal
  closeModal() {
    this.modalService.$modalEliminarPaciente.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
