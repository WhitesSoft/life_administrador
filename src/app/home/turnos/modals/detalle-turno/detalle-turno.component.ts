import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Turno } from 'src/app/models/Turno';
import { ModalsService } from 'src/app/services/modals.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-detalle-turno',
  templateUrl: './detalle-turno.component.html',
  styleUrls: ['./detalle-turno.component.scss']
})
export class DetalleTurnoComponent {

  idTurno: number;
  subscription: Subscription;
  turno?: Turno

  constructor(
    private modalService: ModalsService,
    private turnoService: TurnoService
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

  // Cerrar modal
  closeModal() {
    this.modalService.$modalDetalleTurno.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
