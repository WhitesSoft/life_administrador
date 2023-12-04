import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ModalsService } from 'src/app/services/modals.service';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-eliminar-personal',
  templateUrl: './eliminar-personal.component.html',
  styleUrls: ['./eliminar-personal.component.scss']
})
export class EliminarPersonalComponent {

  idPersonal: number;
  subscription: Subscription;

  constructor(
    private modalService: ModalsService,
    private personalService: PersonalService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Obtengo el id del personal
    this.subscription = this.modalService.$selectedPersonalId.subscribe(id => {
      this.idPersonal = id;
    });
  }

  eliminarPersonal() {
    this.personalService.eliminarPersonal(this.idPersonal).subscribe(
      data => {
        this.toastr.success(data)
        this.closeModal()
      },
      err => {
        console.log(err);
      }
    )
  }

  // Cerrar modal
  closeModal() {
    this.modalService.$modalEliminarPersonal.emit(false)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
