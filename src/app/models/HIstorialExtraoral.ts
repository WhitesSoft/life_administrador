export class HistorialExtraoral {

  id_examenextraoral?: number
  atm?: String
  ganglios_linfaticos?: String
  respirador?: String
  labios?: String
  habitos?: String
  otros?: String
  id_historial?: number

  constructor(atm?: String, ganglios_linfaticos?: String, respirador?: String, labios?: String, habitos?: String, otros?: String) {
    this.atm = atm
    this.ganglios_linfaticos = ganglios_linfaticos
    this.respirador = respirador
    this.labios = labios
    this.habitos = habitos
    this.otros = otros
  }

}
