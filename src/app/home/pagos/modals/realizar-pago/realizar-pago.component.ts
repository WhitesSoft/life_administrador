import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pagos } from 'src/app/models/Pagos';
import { ModalsService } from 'src/app/services/modals.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-realizar-pago',
  templateUrl: './realizar-pago.component.html',
  styleUrls: ['./realizar-pago.component.scss']
})
export class RealizarPagoComponent {

  idPago: number;
  subscription: Subscription;
  pago?: Pagos

  constructor(
    private modalService: ModalsService,
    private pagosService: PagoService
  ) { }


  ngOnInit() {

    // Obtengo el id del pago
    this.subscription = this.modalService.$selectedPagoId.subscribe(id => {
      this.idPago = id;
    });

    // obtengo los datos del pago
    this.pagosService.obtenerPago(this.idPago).subscribe(
      data => this.pago = data,
      err => console.log(err)
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalVerPago.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
