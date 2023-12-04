export class Secretaria {

  id_secretaria: number
  nombre: String
  apellido_paterno: String
  apellido_materno: String
  fecha_nacimiento: Date
  direccion: String
  genero: String
  telefono: Number
  correo: String

  constructor(nombre: String, apellido_paterno: String, apellido_materno: String, fecha_nacimiento: Date,
    direccion: String, genero: String, telefono: Number, correo: String) {
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.fecha_nacimiento = fecha_nacimiento
    this.direccion = direccion
    this.genero = genero
    this.telefono = telefono
    this.correo = correo
  }

}
