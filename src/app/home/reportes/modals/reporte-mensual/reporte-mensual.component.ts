import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-reporte-mensual',
  templateUrl: './reporte-mensual.component.html',
  styleUrls: ['./reporte-mensual.component.scss']
})
export class ReporteMensualComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalReporteMensual.emit(false)
  }

}
