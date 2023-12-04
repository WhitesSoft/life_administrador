import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pagos } from 'src/app/models/Pagos';
import { Personal } from 'src/app/models/Personal';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-pagos-personal',
  templateUrl: './pagos-personal.component.html',
  styleUrls: ['./pagos-personal.component.scss']
})
export class PagosPersonalComponent {

  src: '';
  isLoading = false;
  personals: Personal[] = [];
  allPersonals: Personal[] = [];
  personal: Personal | null = null;


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

  pagar(){

    const pago = new Pagos("personal")

    this.personalService.pagarPersonal(this.personal!.id_personal, pago).subscribe(
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
    this.modalService.$modalPagosPersonal.emit(false)
  }

}
