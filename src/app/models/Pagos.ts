export class Pagos{

  id_pago?: number
  motivo?: string
  fecha?: Date
  monto?: number

  constructor(motivo: string, fecha?: Date, monto?: number){
    this.motivo = motivo
    this.fecha = fecha
    this.monto = monto
  }

}
