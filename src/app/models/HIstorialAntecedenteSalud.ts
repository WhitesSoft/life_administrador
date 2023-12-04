export class HistorialAntecedenteSalud {

  id_antecedentes_salud?: number
  alergias?: String
  antecedentes?: Date
  id_historial?: number

  constructor(alergias?: String, antecedentes?: Date) {
    this.alergias = alergias
    this.antecedentes = antecedentes
  }

}
