import { Pipe, PipeTransform } from '@angular/core';
import { HistorialClinico } from '../models/HistorialClinico';

@Pipe({
  name: 'historiales'
})
export class HistorialesPipe implements PipeTransform {

  transform(lista: HistorialClinico[], search: string): HistorialClinico[] {

    if (!search) {
      return lista;
    }

    const searchLowerCase = search.toLowerCase();

    lista = lista.filter((data) => {
      const fullName = (data.nombre + " " + data.apellido_paterno + " " + data.apellido_materno).toLowerCase();
      return fullName.includes(searchLowerCase);
    });

    return lista;

  }

}
