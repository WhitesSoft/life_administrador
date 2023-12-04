import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DetallePago } from 'src/app/models/DetallePago';
import { Factura } from 'src/app/models/Factura';
import { Pagos } from 'src/app/models/Pagos';
import { FacturaService } from 'src/app/services/factura.service';
import { ModalsService } from 'src/app/services/modals.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-emitir-factura',
  templateUrl: './emitir-factura.component.html',
  styleUrls: ['./emitir-factura.component.scss']
})
export class EmitirFacturaComponent {

  idPago: number;
  subscription: Subscription;
  detallePago?: DetallePago

  detalle = ''
  nit = ''

  constructor(
    private modalService: ModalsService,
    private pagosService: PagoService,
    private facturaService: FacturaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    // Obtengo el id del pago
    this.subscription = this.modalService.$selectedPagoId.subscribe(id => {
      this.idPago = id;
    });


    // obtengo detallePago
    this.pagosService.listaPagos().subscribe(
      data => {
        this.detallePago = data.find(pago => pago.id === this.idPago);
      }
    )

  }

  emitir() {
    const factura = new Factura(this.detallePago?.paciente, this.detalle, Number(this.nit), this.detallePago?.monto)
    console.log(factura);

    this.facturaService.crearFactura(this.idPago, factura).subscribe(
      data => {
        this.toastr.success(data)
        this.closeModal()
      },
      err => this.toastr.error(err.message)
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEmitirFactura.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
