import { Component } from '@angular/core';
import { da, id } from 'date-fns/locale';
import { ToastrService } from 'ngx-toastr';
import { HistorialAntecedenteSalud } from 'src/app/models/HIstorialAntecedenteSalud';
import { HistorialExtraoral } from 'src/app/models/HIstorialExtraoral';
import { HistorialAntecedenteHiguiene } from 'src/app/models/HistorialAntecedenteHiguiene';
import { HistorialClinico } from 'src/app/models/HistorialClinico';
import { HistorialConsulta } from 'src/app/models/HistorialConsulta';
import { HistorialIntraoral } from 'src/app/models/HistorialIntraoral';
import { Paciente } from 'src/app/models/Paciente';
import { HistorialAntecedenteHiguieneService } from 'src/app/services/historial-antecedente-higuiene.service';
import { HistorialAntecedenteSaludService } from 'src/app/services/historial-antecedente-salud.service';
import { HistorialConsultaService } from 'src/app/services/historial-consulta.service';
import { HistorialExtraoralService } from 'src/app/services/historial-extraoral.service';
import { HistorialIntraoralService } from 'src/app/services/historial-intraoral.service';
import { ModalsService } from 'src/app/services/modals.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss']
})
export class FormularioPacienteComponent {

  nombres = ''
  apellidoPaterno = ''
  apellidoMaterno = ''
  telefono = ''
  fechaNacimiento = ''
  sexo = ''
  direccion = ''
  correo = ''

  constructor(
    private modalService: ModalsService,
    private pacienteService: PacienteService,
    private consultaService: HistorialConsultaService,
    private saludService: HistorialAntecedenteSaludService,
    private extraoralService: HistorialExtraoralService,
    private intraoralService: HistorialIntraoralService,
    private higuieneService: HistorialAntecedenteHiguieneService,
    private toastr: ToastrService
  ) { }

  crearPaciente() {

    const historialClinico = new HistorialClinico(this.nombres, this.apellidoPaterno, this.apellidoMaterno, this.direccion,
      this.sexo, Number(this.telefono))

    const paciente = new Paciente(this.nombres, this.apellidoPaterno, this.apellidoMaterno, this.direccion, this.fechaNacimiento,
      this.sexo, Number(this.telefono), this.correo, true, historialClinico)

      const consultaHistorial = new HistorialConsulta()
      const antecedenteSaludHistorial = new HistorialAntecedenteSalud()
      const extraoralHistorial = new HistorialExtraoral()
      const intraoralHistorial = new HistorialIntraoral()
      const antecedenteHiguieneHistorial = new HistorialAntecedenteHiguiene()

    this.pacienteService.crearPaciente(paciente).subscribe(
      data => {

        const idHistorial = data.paciente.id_paciente

        // cuando creo el paciente tambien se creara el historial con sus partes
        this.consultaService.crearConsulta(idHistorial, consultaHistorial).subscribe()
        this.saludService.crearAntecedenteSalud(idHistorial, antecedenteSaludHistorial).subscribe()
        this.extraoralService.crearExtraoral(idHistorial, extraoralHistorial).subscribe()
        this.intraoralService.crearIntraoral(idHistorial, intraoralHistorial).subscribe()
        this.higuieneService.crearAntecedenteHiguiene(idHistorial, antecedenteHiguieneHistorial).subscribe()

        this.toastr.success(data.message)
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
    this.modalService.$modalCrearPaciente.emit(false)
  }


}

