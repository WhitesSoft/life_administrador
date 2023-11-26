import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/Paciente';
import { Turno } from 'src/app/models/Turno';
import { ModalsService } from 'src/app/services/modals.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-crear-turno',
  templateUrl: './crear-turno.component.html',
  styleUrls: ['./crear-turno.component.scss']
})
export class CrearTurnoComponent {

  isLoading = false;
  src: '';
  pacientes: Paciente[] = [];
  allPacientes: Paciente[] = [];
  paciente: Paciente | null = null;

  hora: Time
  fecha: Date
  motivo = ''

  constructor(
    private modalService: ModalsService,
    private pacientesService: PacienteService,
    private turnoService: TurnoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getAllPacientes()
  }

  getAllPacientes() {
    this.pacientesService.listaPacientes()
      .subscribe(
        data => this.allPacientes = data,
        err => console.log(err)
      );
  }

  search(value: any): any {
    if (value.trim()) {
      this.pacientes = this.allPacientes.filter(paciente =>
        paciente.nombre.toLowerCase().includes(value.toLowerCase()) ||
        paciente.apellido_paterno.toLowerCase().includes(value.toLowerCase()) ||
        paciente.apellido_materno.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      this.pacientes = []
    }
  }

  onPacienteClick(paciente: Paciente) {
    this.isLoading = false
    this.pacientes = []
    this.src = ''

    // Obtenemos el paciente
    this.paciente = paciente

    console.log(paciente);
  }

  registerTurno() {

    const turno = new Turno(false, this.paciente!.nombre, this.paciente!.apellido_paterno, this.paciente!.apellido_materno,
      this.fecha, this.hora, this.motivo)

    console.log(turno);

    this.turnoService.registrarTurno(this.paciente!.id_paciente, turno).subscribe(
      data => {
        this.toastr.success(data.message)
        this.closeModal()
      },
      err => this.toastr.error(err.message)
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalCrearTurno.emit(false)
  }

}
