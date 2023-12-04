import { Pipe, PipeTransform } from '@angular/core';
import { Paciente } from '../models/Paciente';

@Pipe({
  name: 'pacientes'
})
export class PacientesPipe implements PipeTransform {


  transform(lista: Paciente[], search: string): Paciente[] {
    // lista = lista.filter((data) => (
    //   ((data.nombre + " " + data.apellido_paterno + " " + data.apellido_materno)).includes(search.toLowerCase().toLowerCase())
    // ));
    // return lista;


    if (!search) {
      return lista;
    }
    // Convertir la búsqueda a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
    const searchLowerCase = search.toLowerCase();

    lista = lista.filter((data) => {
      // Concatenar y convertir los nombres a minúsculas antes de hacer la comparación
      const fullName = (data.nombre + " " + data.apellido_paterno + " " + data.apellido_materno).toLowerCase();
      return fullName.includes(searchLowerCase);
    });

    return lista;

  }


}
