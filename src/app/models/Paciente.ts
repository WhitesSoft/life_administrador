export class Paciente {

  id?: Number
  nombre?: String
  apellido_paterno?: String
  apellido_materno?: String
  direccion?: String
  fecha_nacimiento?: String
  genero?: String
  telefono?: Number
  correo?: String
  estado?: Boolean

  constructor(nombre: String, apellido_paterno: String, apellido_materno: String, direccion: String, fecha_nacimiento: String,
    genero: String, telefono: Number, correo: String, estado: Boolean) {
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.direccion = direccion
    this.fecha_nacimiento = fecha_nacimiento
    this.genero = genero
    this.telefono = telefono
    this.correo = correo
    this.estado = estado
  }

}
