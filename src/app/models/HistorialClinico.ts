export class HistorialClinico {

  id_historial?: number
  nombre?: String
  apellido_paterno?: String
  apellido_materno?: String
  direccion?: String
  sexo?: String
  telefono?: Number
  fecha_nacimiento?: Date
  edad?: number
  ciudad?: string
  pais?: string
  estado_civil?: string
  nivel_educacion?: string
  profesion?: string

  constructor(nombre: String, apellido_paterno: String, apellido_materno: String, direccion: String,
    sexo: String, telefono: Number, fecha_nacimiento?: Date, edad?: number, estado_civil?: string,
    nivel_educacion?: string, profesion?: string, ciudad?: string, pais?: string) {
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.direccion = direccion
    this.sexo = sexo
    this.telefono = telefono
    this.fecha_nacimiento = fecha_nacimiento
    this.edad = edad
    this.estado_civil = estado_civil
    this.nivel_educacion = nivel_educacion
    this.profesion = profesion
    this.ciudad = ciudad
    this.pais = pais
  }

}
