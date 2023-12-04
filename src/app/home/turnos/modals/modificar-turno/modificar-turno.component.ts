import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Turno } from 'src/app/models/Turno';
import { ModalsService } from 'src/app/services/modals.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-modificar-turno',
  templateUrl: './modificar-turno.component.html',
  styleUrls: ['./modificar-turno.component.scss']
})
export class ModificarTurnoComponent {

  idTurno: number;
  subscription: Subscription;
  turno: Turno

  constructor(
    private modalService: ModalsService,
    private turnoService: TurnoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Obtengo el id del turno
    this.subscription = this.modalService.$selectedTurnoId.subscribe(id => {
      this.idTurno = id;
    });

    // obtengo los datos del turno
    this.turnoService.obtenerTurno(this.idTurno).subscribe(
      data => this.turno = data,
      err => console.log(err)
    )

  }

  modificarTurno() {

    this.turnoService.modificarTurno(Number(this.idTurno), this.turno).subscribe(
      data => {
        this.toastr.success(data.message)
        this.closeModal()
      },
      err => this.toastr.error(err.message)
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalModificarTurno.emit(false)
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
