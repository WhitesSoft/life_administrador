import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ModalsService } from 'src/app/services/modals.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-eliminar-turno',
  templateUrl: './eliminar-turno.component.html',
  styleUrls: ['./eliminar-turno.component.scss']
})
export class EliminarTurnoComponent {

  idTurno: number;
  subscription: Subscription;

  constructor(
    private modalService: ModalsService,
    private turnoService: TurnoService,
    private toastr: ToastrService
  ) { }


  ngOnInit(){
     // Obtengo el id del turno
     this.subscription = this.modalService.$selectedTurnoId.subscribe(id => {
      this.idTurno = id;
    });
  }

  eliminarTurno() {
    this.turnoService.eliminarTurno(this.idTurno).subscribe(
      data => {
        this.toastr.success(data.message)
        this.closeModal()
      },
      err => {
        console.log(err.message);
      }
    )
  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEliminarTurno.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
