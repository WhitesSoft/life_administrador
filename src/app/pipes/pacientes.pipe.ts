import { Pipe, PipeTransform } from '@angular/core';
import { Paciente } from '../models/Paciente';

@Pipe({
  name: 'pacientes'
})
export class PacientesPipe implements PipeTransform {


  transform(lista: Paciente[], search: string): Paciente[] {
    lista = lista.filter((data) => (
      ((data.nombre + " " + data.apellido_paterno + " " + data.apellido_materno)).includes(search)
    ));
    return lista;
  }


}
