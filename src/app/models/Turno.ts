import { Time } from "@angular/common"

export class Turno {

  id_turno?: number
  estado?: Boolean
  nombre?: String
  apellido_paterno?: String
  apellido_materno?: String
  fecha?: Date
  hora?: Time
  motivo?: String

  constructor(estado: Boolean, nombre: String, apellido_paterno: String, apellido_materno: String, fecha: Date,
    hora: Time, motivo: String) {
    this.estado = estado
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.fecha = fecha
    this.hora = hora
    this.motivo = motivo
  }

}
