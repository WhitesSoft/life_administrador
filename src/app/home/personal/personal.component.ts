import { Component } from '@angular/core';
import { Personal } from 'src/app/models/Personal';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  personal: Personal[] = []

  // Estados modal
  modalOpenDetallePersonal = false
  modalOpenCrearPersonal = false
  modalOpenModificarPersonal = false
  modalOpenEliminarPersonal = false
  modalOpenControlarAsistencia = false
  modalOpenPagosPersonal = false

  constructor(
    private modalService: ModalsService,
    private personalService: PersonalService
  ) { }

  ngOnInit() {

    // Escuchamos el observable del modal
    this.modalService.$modalDetallePersonal.subscribe((data) => { this.modalOpenDetallePersonal = data })
    this.modalService.$modalCrearPersonal.subscribe((data) => { this.modalOpenCrearPersonal = data })
    this.modalService.$modalModificarPersonal.subscribe((data) => { this.modalOpenModificarPersonal = data })
    this.modalService.$modalEliminarPersonal.subscribe((data) => { this.modalOpenEliminarPersonal = data })
    this.modalService.$modalControlarAsistencia.subscribe((data) => { this.modalOpenControlarAsistencia = data })
    this.modalService.$modalPagosPersonal.subscribe((data) => { this.modalOpenPagosPersonal = data })

    // cargar la lista
    this.personalService.listaPersonal().subscribe(
      data => this.personal = data,
      err => console.log(err)
    )

    // interval(1000) // Cada 1000ms o 1 segundo
    // .pipe(
    //   startWith(0), // Para que se ejecute inmediatamente al iniciar
    //   switchMap(() => this.personalService.listaPersonal())
    // )
    // .subscribe(
    //   data => this.personal = data,
    //   err => console.log(err)
    // );

  }

  openModal(tipo: String, idPersonal?: number) {

    if (tipo === 'ver') {
      this.modalService.$selectedPersonalId.next(idPersonal!)
      this.modalOpenDetallePersonal = true
    }

    if (tipo === 'crear'){
      this.modalOpenCrearPersonal = true
    }


    if (tipo === 'modificar') {
      this.modalService.$selectedPersonalId.next(idPersonal!)
      console.log(idPersonal);

      this.modalOpenModificarPersonal = true
    }

    if (tipo === 'eliminar') {
      this.modalService.$selectedPersonalId.next(idPersonal!)
      this.modalOpenEliminarPersonal = true
    }

    if (tipo === 'controlar')
      this.modalOpenControlarAsistencia = true

    if (tipo === 'pagos')
      this.modalOpenPagosPersonal = true

  }

}
