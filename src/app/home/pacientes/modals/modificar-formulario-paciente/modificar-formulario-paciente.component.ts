import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Paciente } from 'src/app/models/Paciente';
import { ModalsService } from 'src/app/services/modals.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-modificar-formulario-paciente',
  templateUrl: './modificar-formulario-paciente.component.html',
  styleUrls: ['./modificar-formulario-paciente.component.scss']
})
export class ModificarFormularioPacienteComponent {

  idPaciente: number;
  subscription: Subscription;
  paciente: Paciente


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


    // obtengo los datos del paciente
    this.pacienteService.obtenerPaciente(this.idPaciente).subscribe(
      data => {
        this.paciente = data
      },
      err => {
        console.log(err);
      }
    )

  }

  modificarPaciente() {

    this.pacienteService.modificarPaciente(Number(this.idPaciente), this.paciente).subscribe(
      data => {
        this.toastr.success(data)
        this.closeModal()
      },
      err => {
        console.log(err);
        this.toastr.error(err)
      }
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarPaciente.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
