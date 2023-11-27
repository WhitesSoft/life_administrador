export class Factura {

  id_factura?: number
  senor?: string
  detalle?: string
  nit?: number
  total?: number

  constructor(senor?: string, detalle?: string, nit?: number, total?: number) {
    this.senor = senor
    this.detalle = detalle
    this.nit = nit
    this.total = total
  }

}
