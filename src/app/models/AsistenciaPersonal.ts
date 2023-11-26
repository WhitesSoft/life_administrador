export class AsistenciaPersonal {

  id_asistencia?: number
  fecha?: Date
  estado_asistencia?: boolean

  constructor(fecha: Date, estado_asistencia: boolean){
    this.fecha = fecha
    this.estado_asistencia = estado_asistencia
  }

}
