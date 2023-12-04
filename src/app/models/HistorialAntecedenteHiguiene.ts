export class HistorialAntecedenteHiguiene {

  id_antecedentes_higuiene?: number
  usa_cepillo_dental?: Boolean
  usa_hilo_dental?: Boolean
  usa_enjuague_bucal?: Boolean
  frecuencia_cepillado_dental?: String
  sangran_encias?: Boolean
  higuiene_bucal?: String
  id_historial?: number

  constructor(usa_cepillo_dental?: Boolean, usa_hilo_dental?: Boolean, usa_enjuague_bucal?: Boolean, frecuencia_cepillado_dental?: String,
    sangran_encias?: Boolean, higuiene_bucal?: String) {
    this.usa_cepillo_dental = usa_cepillo_dental
    this.usa_hilo_dental = usa_hilo_dental
    this.usa_enjuague_bucal = usa_enjuague_bucal
    this.frecuencia_cepillado_dental = frecuencia_cepillado_dental
    this.sangran_encias = sangran_encias
    this.higuiene_bucal = higuiene_bucal
  }

}
