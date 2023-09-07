import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-reporte-semanal',
  templateUrl: './reporte-semanal.component.html',
  styleUrls: ['./reporte-semanal.component.scss']
})
export class ReporteSemanalComponent {

  constructor(private modalService: ModalsService) { }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalReporteSemanal.emit(false)
  }

}
