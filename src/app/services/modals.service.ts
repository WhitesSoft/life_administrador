import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  // Observable
  $modalRegistrarPaciente = new EventEmitter<any>();

  // Paciente
  $modalCrearPaciente = new EventEmitter<any>();
  $modalModificarPaciente = new EventEmitter<any>();

  constructor() { }
  
}
