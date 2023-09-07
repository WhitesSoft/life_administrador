import { Component } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent {

  inventario: any = [
    ['A123', 'Material X', '5'],
    ['A124', 'Material X', '2'],
    ['A125', 'Material X', '1'],
    ['A126', 'Material X', '0'],
  ]

  // Estados modal
  modalOpenRegistroInventario = false

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable del modal
    this.modalService.$modalRegistroInventario.subscribe((data) => { this.modalOpenRegistroInventario = data })
  }

  openModal(tipo: String) {
  
    if (tipo === 'crear')
      this.modalOpenRegistroInventario = true

  }

}
