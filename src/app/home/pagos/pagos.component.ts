import { Component } from '@angular/core';
import { DetallePago } from 'src/app/models/DetallePago';
import { ModalsService } from 'src/app/services/modals.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent {

  detallePago: DetallePago[] = []

  // Estados modal
  modalOpenVerPago = false
  modalOpenEmitirFactura = false

  constructor(
    private modalService: ModalsService,
    private pagosService: PagoService
    ) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalVerPago.subscribe((data) => { this.modalOpenVerPago = data })
    this.modalService.$modalEmitirFactura.subscribe((data) => { this.modalOpenEmitirFactura = data })

    this.pagosService.listaPagos().subscribe(
      data => this.detallePago = data,
      err => console.log(err.message)
    )
  }

  openModal(tipo: String, idPago?: number) {

    if (tipo === 'ver'){
      console.log("ver", tipo, idPago);

      this.modalService.$selectedPagoId.next(idPago!)
      this.modalOpenVerPago = true
    }


    if (tipo === 'emitir'){
      console.log("emitir", tipo, idPago);
      this.modalService.$selectedPagoId.next(idPago!)
      this.modalOpenEmitirFactura = true
    }

  }


}
