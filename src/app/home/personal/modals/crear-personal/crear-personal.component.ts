import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Asistente } from 'src/app/models/Asistente';
import { Secretaria } from 'src/app/models/Secretaria';
import { Usuario_Asistente } from 'src/app/models/Usuario_Asistente';
import { Usuario_Secretaria } from 'src/app/models/Usuario_Secretaria';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-crear-personal',
  templateUrl: './crear-personal.component.html',
  styleUrls: ['./crear-personal.component.scss']
})
export class CrearPersonalComponent {

  nombres = ''
  apellido_paterno = ''
  apellido_materno = ''
  telefono = ''
  fecha_nacimiento: Date
  genero = ''
  direccion = ''
  correo = ''
  usuario = ''
  password = ''
  personal = ''

  constructor(
    private modalService: ModalsService,
    private personalService: PersonalService,
    private toastr: ToastrService
  ) { }

  registrarPersonal() {

    if (this.personal === 'Asistente') {
      const asistente = new Asistente(this.nombres, this.apellido_paterno, this.apellido_materno, this.fecha_nacimiento,
        this.direccion, this.genero, Number(this.telefono), this.correo)
      const personalA = new Usuario_Asistente(this.usuario, this.password, this.correo, asistente)


      this.personalService.registrarPersonalAsistente(personalA).subscribe(
        data => {
          this.toastr.success(data)
          this.closeModal()
        },
        err => {
          console.log(err);
        }
      )

    } else {

      const secretaria = new Secretaria(this.nombres, this.apellido_paterno, this.apellido_materno, this.fecha_nacimiento,
        this.direccion, this.genero, Number(this.telefono), this.correo)
      const personalS = new Usuario_Secretaria(this.usuario, this.password, this.correo, secretaria)

      this.personalService.registrarPersonalSecretaria(personalS).subscribe(
        data => {
          this.toastr.success(data)
          this.closeModal()
        },
        err => {
          console.log(err);
        }
      )

    }




  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalCrearPersonal.emit(false)
  }

}
