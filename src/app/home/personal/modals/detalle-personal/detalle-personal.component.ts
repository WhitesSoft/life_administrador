import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personal } from 'src/app/models/Personal';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-detalle-personal',
  templateUrl: './detalle-personal.component.html',
  styleUrls: ['./detalle-personal.component.scss']
})
export class DetallePersonalComponent {

  idPersonal: number;
  subscription: Subscription;
  personal?: Personal

  constructor(
    private modalService: ModalsService,
    private personalService: PersonalService
    ) { }

    ngOnInit() {

      // Obtengo el id del paciente
      this.subscription = this.modalService.$selectedPersonalId.subscribe(id => {
        this.idPersonal = id;
      });

      // obtengo los datos del paciente
      this.personalService.obtenerPersonal(this.idPersonal).subscribe(
        data => {
          console.log(data);
          this.personal = data
        },
        err => console.log(err)
      )

    }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalDetallePersonal.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
