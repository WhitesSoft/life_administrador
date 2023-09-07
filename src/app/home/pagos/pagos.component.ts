import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent {

  pagos: any = [
    ['Juan Montero', '123 Bs', '12/12/2012'],
    ['Marco Cardozo', '123 Bs', '12/12/2012']
  ]

 // Estados modal
 modalOpenRealizarPago = false
 modalOpenEmitirFactura = false

 constructor(private modalService: ModalsService) { }

 ngOnInit() {
   // Escuchamos el observable del modal
   this.modalService.$modalRealizarPago.subscribe((data) => { this.modalOpenRealizarPago = data })
   this.modalService.$modalEmitirFactura.subscribe((data) => { this.modalOpenEmitirFactura = data })  
 }

 openModal(tipo: String) {
   if (tipo === 'pago')
     this.modalOpenRealizarPago = true

   if (tipo === 'factura')
     this.modalOpenEmitirFactura = true
 }


}
