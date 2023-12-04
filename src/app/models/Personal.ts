export class Personal {

  id_personal: number
  nombre: String
  apellido_paterno: String
  apellido_materno: String
  direccion: String
  fecha_nacimiento: Date
  genero: String
  telefono: Number
  correo: String
  asistencia: number
  rol: String


  constructor(nombre: String, apellido_paterno: String, apellido_materno: String, direccion: String, fecha_nacimiento: Date,
    genero: String, telefono: Number, correo: String, asistencia: number, rol: String) {
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.direccion = direccion
    this.fecha_nacimiento = fecha_nacimiento
    this.genero = genero
    this.telefono = telefono
    this.correo = correo
    this.asistencia = asistencia
    this.rol = rol
  }

}
