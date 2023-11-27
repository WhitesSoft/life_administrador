import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Atencion } from 'src/app/models/Atencion';
import { Turno } from 'src/app/models/Turno';
import { AtencionService } from 'src/app/services/atencion.service';
import { ModalsService } from 'src/app/services/modals.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-registrar-atencion',
  templateUrl: './registrar-atencion.component.html',
  styleUrls: ['./registrar-atencion.component.scss']
})
export class RegistrarAtencionComponent {

  idTurno: number;
  subscription: Subscription;
  turno?: Turno

  nombre = ''
  apellidoPaterno = ''
  apellidoMaterno = ''
  fecha: Date
  monto = ''

  constructor(
    private modalService: ModalsService,
    private turnoService: TurnoService,
    private atencionService: AtencionService,
    private toastr: ToastrService
  ) { }


  ngOnInit() {

    // Obtengo el id del turno
    this.subscription = this.modalService.$selectedTurnoId.subscribe(id => {
      this.idTurno = id;
    });

    // obtengo los datos del turno
    this.turnoService.obtenerTurno(this.idTurno).subscribe(
      data => this.turno = data,
      err => console.log(err)
    )

  }

  registrarAtencion() {
    this.turno!.estado = true
    const atencion = new Atencion(this.turno!.nombre, this.turno!.apellido_paterno, this.turno!.apellido_materno,
       this.turno!.fecha, Number(this.monto))

    console.log(atencion);


    // registrar atencion y modificar turno
    this.atencionService.registrarAtencion(this.idTurno, atencion).subscribe(
      data => {
        this.toastr.success(data.message)
        this.closeModal()

        // modificar estado del turno
        this.turnoService.modificarTurno(this.idTurno, this.turno!).subscribe()
      },
      err => {
        this.toastr.error(err.error.message)
      }
    )
  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalRegistrarAtencion.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
