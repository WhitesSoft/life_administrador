import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent {

  

  // Estados modal
  modalOpenReporteSemanal = false
  modalOpenReporteMensual = false

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalReporteSemanal.subscribe((data) => { this.modalOpenReporteSemanal = data })
    this.modalService.$modalReporteMensual.subscribe((data) => { this.modalOpenReporteMensual = data })
   
  }

  openModal(tipo: String) {
    if (tipo === 'semanal')
      this.modalOpenReporteSemanal = true

    if (tipo === 'mensual')
      this.modalOpenReporteMensual = true
  }

}
