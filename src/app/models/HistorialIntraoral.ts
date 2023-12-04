export class HistorialIntraoral {

  id_examenintraoral?: number
  lengua?: String
  paladar?: String
  piso_boca?: String
  mucosa_yugal?: String
  encias?: String
  protesis?: Boolean
  id_historial?: number

  constructor(lengua?: String, paladar?: String, piso_boca?: String, mucosa_yugal?: String,
     encias?: String, protesis?: Boolean) {
    this.lengua = lengua
    this.paladar = paladar
    this.piso_boca = piso_boca
    this.mucosa_yugal = mucosa_yugal
    this.encias = encias
    this.protesis = protesis
  }

}
