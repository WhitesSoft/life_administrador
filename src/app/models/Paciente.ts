import { HistorialClinico } from "./HistorialClinico"

export class Paciente {

  id_paciente: number
  nombre: String
  apellido_paterno: String
  apellido_materno: String
  direccion: String
  fecha_nacimiento: String
  genero: String
  telefono: Number
  correo: String
  estado: Boolean
  historial?: HistorialClinico

  constructor(nombre: String, apellido_paterno: String, apellido_materno: String, direccion: String, fecha_nacimiento: String,
    genero: String, telefono: Number, correo: String, estado: Boolean, historial?: HistorialClinico) {
    this.nombre = nombre
    this.apellido_paterno = apellido_paterno
    this.apellido_materno = apellido_materno
    this.direccion = direccion
    this.fecha_nacimiento = fecha_nacimiento
    this.genero = genero
    this.telefono = telefono
    this.correo = correo
    this.estado = estado
    this.historial = historial
  }

}
