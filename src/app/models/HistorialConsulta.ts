export class HistorialConsulta {

  id_consulta?: number
  motivo?: String
  ultima_visita_odontologo?: Date
  id_historial?: number

  constructor(motivo?: String, ultima_visita_odontologo?: Date) {
    this.motivo = motivo
    this.ultima_visita_odontologo = ultima_visita_odontologo
  }

}
