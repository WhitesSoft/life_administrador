import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-eliminar-historial',
  templateUrl: './eliminar-historial.component.html',
  styleUrls: ['./eliminar-historial.component.scss']
})
export class EliminarHistorialComponent {

  idHistorial: number;
  subscription: Subscription;

  constructor(
    private modalService: ModalsService,
    private historialService: HistorialClinicoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Obtengo el id del historial
    this.subscription = this.modalService.$selectedHistorialId.subscribe(id => {
      this.idHistorial = id;
    });

  }

  eliminarHistorial() {
    this.historialService.eliminarHistorial(this.idHistorial).subscribe(
      data => {
        this.toastr.success(data.message)
        this.closeModal()
      },
      err => {
        console.log(err.error.message);
      }
    )
  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEliminarHistorial.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
