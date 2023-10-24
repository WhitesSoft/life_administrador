export class HistorialClinico{

  id?: Number
  fecha_creacion?: Date
  estado?: Boolean

  constructor(fecha_creacion: Date, estado: Boolean){
    this.fecha_creacion = fecha_creacion,
    this.estado = estado
  }

}
