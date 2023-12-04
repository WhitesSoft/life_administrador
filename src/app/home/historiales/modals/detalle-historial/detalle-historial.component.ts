import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistorialAntecedenteSalud } from 'src/app/models/HIstorialAntecedenteSalud';
import { HistorialExtraoral } from 'src/app/models/HIstorialExtraoral';
import { HistorialAntecedenteHiguiene } from 'src/app/models/HistorialAntecedenteHiguiene';
import { HistorialClinico } from 'src/app/models/HistorialClinico';
import { HistorialConsulta } from 'src/app/models/HistorialConsulta';
import { HistorialIntraoral } from 'src/app/models/HistorialIntraoral';
import { HistorialAntecedenteHiguieneService } from 'src/app/services/historial-antecedente-higuiene.service';
import { HistorialAntecedenteSaludService } from 'src/app/services/historial-antecedente-salud.service';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { HistorialConsultaService } from 'src/app/services/historial-consulta.service';
import { HistorialExtraoralService } from 'src/app/services/historial-extraoral.service';
import { HistorialIntraoralService } from 'src/app/services/historial-intraoral.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.scss']
})
export class DetalleHistorialComponent {

  idHistorial: number;
  subscription: Subscription;
  historial?: HistorialClinico
  consulta?: HistorialConsulta
  salud?: HistorialAntecedenteSalud
  extraoral?: HistorialExtraoral
  intraoral?: HistorialIntraoral
  higuiene?: HistorialAntecedenteHiguiene

  constructor(
    private modalService: ModalsService,
    private historialService: HistorialClinicoService,
    private consultaService: HistorialConsultaService,
    private saludService: HistorialAntecedenteSaludService,
    private extraoralService: HistorialExtraoralService,
    private intraoralService: HistorialIntraoralService,
    private higuieneService: HistorialAntecedenteHiguieneService
  ) { }


  ngOnInit() {

    // Obtengo el id del historial
    this.subscription = this.modalService.$selectedHistorialId.subscribe(id => {
      this.idHistorial = id;
    });

    // obtengo los datos del historial
    this.historialService.verHistorial(this.idHistorial).subscribe(
      data => {
        console.log(data);
        this.historial = data
      },
      err => console.log(err)
    )

    this.consultaService.obtenerConsulta(this.idHistorial).subscribe(
      data => this.consulta = data,
      err => console.log(err)
    )

    this.saludService.obtenerAntecedenteSalud(this.idHistorial).subscribe(
      data => this.salud = data,
      err => console.log(err)
    )

    this.extraoralService.obtenerExtraoral(this.idHistorial).subscribe(
      data => this.extraoral = data,
      err => console.log(err)
    )

    this.intraoralService.obtenerIntraoral(this.idHistorial).subscribe(
      data => this.intraoral = data,
      err => console.log(err)
    )

    this.higuieneService.obtenerAntecedenteHiguiene(this.idHistorial).subscribe(
      data =>  this.higuiene = data,
      err => console.log(err)
    )

  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalDetalleHistorial.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
