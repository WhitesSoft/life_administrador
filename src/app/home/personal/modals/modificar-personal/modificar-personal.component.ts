import { Component } from '@angular/core';
import { Personal } from 'src/app/models/Personal';
import { Subscription } from 'rxjs';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-personal',
  templateUrl: './modificar-personal.component.html',
  styleUrls: ['./modificar-personal.component.scss']
})
export class ModificarPersonalComponent {

  idPersonal: number;
  subscription: Subscription;
  personal: Personal

  constructor(
    private personalService: PersonalService,
    private toastr: ToastrService,
    private modalService: ModalsService
  ) { }

  ngOnInit() {

    // Obtengo el id del personal
    this.subscription = this.modalService.$selectedPersonalId.subscribe(id => {
      this.idPersonal = id;

    });

    this.personalService.obtenerPersonal(this.idPersonal).subscribe(
      data => { this.personal = data },
      err => console.log(err.message)
    )

  }

  modificar() {
    this.personalService.modificarPersonal(this.idPersonal, this.personal).subscribe(
      data => {
        this.toastr.success(data)
        this.closeModal()
      },
      err => this.toastr.error(err.message)
    )
  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarPersonal.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
