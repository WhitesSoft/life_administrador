import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AsistenciaPersonal } from 'src/app/models/AsistenciaPersonal';
import { Personal } from 'src/app/models/Personal';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-controlar-asistencia',
  templateUrl: './controlar-asistencia.component.html',
  styleUrls: ['./controlar-asistencia.component.scss']
})
export class ControlarAsistenciaComponent {

  src: '';
  isLoading = false;
  personals: Personal[] = [];
  allPersonals: Personal[] = [];
  personal: Personal | null = null;
  asistio: boolean
  fecha: Date

  constructor(
    private personalService: PersonalService,
    private toastr: ToastrService,
    private modalService: ModalsService
  ) { }

  ngOnInit() {

    this.personalService.listaPersonal().subscribe(
      data => {
        this.allPersonals = data
        console.log(this.allPersonals);
      }
    )

  }

  controlar() {
    const asistenciaPersonal = new AsistenciaPersonal(this.fecha, this.asistio)
    console.log(asistenciaPersonal, this.personal?.id_personal);

    this.personalService.controlarAsistencia(this.personal!.id_personal, asistenciaPersonal).subscribe(
      data => {
        this.toastr.success(data.message)
        this.closeModal()
      },
      err => this.toastr.error(err.message)
    )
  }

  search(value: any): any {
    if (value.trim()) {
      this.personals = this.allPersonals.filter(personal =>
        personal.nombre.toLowerCase().includes(value.toLowerCase()) ||
        personal.apellido_paterno.toLowerCase().includes(value.toLowerCase()) ||
        personal.apellido_materno.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      this.personals = []
    }
  }

  onPersonalClick(personal: Personal) {
    this.isLoading = false
    this.personals = []
    this.src = ''

    // Obtenemos el paciente
    this.personal = personal

    console.log(personal);
  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalControlarAsistencia.emit(false)
  }

}
