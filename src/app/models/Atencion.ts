export class Atencion {

  id_atencion?: number
  nombre?: String
  apellido_paterno?: String
  apellido_materno?: String
  fecha?: Date

  constructor(nombre?: String, apellido_paterno?: String, apellido_materno?: String, fecha?: Date) {
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.fecha = fecha
  }

}
