import { ChangeDetectorRef, Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { Turno } from 'src/app/models/Turno';
import { ModalsService } from 'src/app/services/modals.service';
import { TurnoService } from 'src/app/services/turno.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();
  turnos: Turno[] = []
  turnosDelDia: Turno[] = [];

  // events: CalendarEvent[] = [
  //   {
  //     title: 'Juan Montero',
  //     start: setHours(setMinutes(new Date(), 1), 15),
  //     end: setHours(setMinutes(new Date(), 1), 16),
  //   },
  //   {
  //     title: 'Pedro Ochoa',
  //     start: setHours(setMinutes(new Date(), 1), 8),
  //     end: setHours(setMinutes(new Date(), 1), 9),
  //   },
  //   {
  //     title: 'Megan Fox',
  //     start: setHours(setMinutes(new Date(), 1), 11),
  //     end: setHours(setMinutes(new Date(), 1), 12),
  //   },
  // ];

  events: CalendarEvent[] = []

  modalOpenRegistraAtencion = false

  constructor(
    private modalService: ModalsService,
    private turnoService: TurnoService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Escuchamos el observable
    this.modalService.$modalRegistrarAtencion.subscribe((data) => { this.modalOpenRegistraAtencion = data })

    // obtemos la lista de turnos
    // this.turnoService.listaTurnos().subscribe(
    //   data => {
    //     this.turnos = data

    //     // listar turno por fecha de hoy
    //     const fechaHoy = this.obtenerFechaActual();
    //     this.turnosDelDia = this.filtrarPorFecha(fechaHoy);
    //     this.events = this.transformTurnosToEvents(this.turnosDelDia);

    //     // mostramos
    //     // for (let item in this.turnosDelDia){
    //     //   console.log(this.turnosDelDia[item]);
    //     //   this.events.push(this.turnosDelDia[item])
    //     // }

    //   },
    //   err => console.log(err)
    // )

    this.turnoService.listaTurnos().subscribe(data => {
      this.turnos = data.map(turno => this.convertTurnoFromBackend(turno)); // Transformamos cada turno que viene del backend.

      const fechaHoy = this.obtenerFechaActual();
      this.turnosDelDia = this.filtrarPorFecha(fechaHoy);
      this.events = this.transformTurnosToEvents(this.turnosDelDia);

    },
      err => console.log(err));



  }

  convertTurnoFromBackend(turno: any): Turno {
    if (typeof turno.hora === 'string') {
      const [hours, minutes, seconds] = turno.hora.split(':').map(Number);
      turno.hora = { hours, minutes, seconds };
    }

    if (typeof turno.fecha === 'string') {
      const [year, month, day] = turno.fecha.split('-').map(Number);
      turno.fecha = new Date(year, month - 1, day);
    }

    return turno as Turno;
  }

  // filtra por fecha y por turnos no atendidos
  filtrarPorFecha(fecha: Date): any[] {
    const fechaString = fecha.toISOString().split('T')[0]; // YYYY-MM-DD
    return this.turnos.filter(turno => turno.fecha && turno.fecha.toISOString().split('T')[0] === fechaString && turno.estado === false);
  }

  transformTurnosToEvents(turnos: Turno[]): CalendarEvent[] {
    return turnos.map(turno => {
      const fecha = turno.fecha!;
      const hours = turno.hora!.hours;
      const minutes = turno.hora!.minutes;

      return {
        title: `${turno.nombre} ${turno.apellido_paterno} ${turno.apellido_materno}`,
        start: setHours(setMinutes(fecha, minutes), hours),
        end: setHours(setMinutes(fecha, minutes + 1), hours + 1),
        cssClass: `${turno.id_turno}`
      };
    });
  }



  openModal(idTurno: number) {
    this.modalService.$selectedTurnoId.next(idTurno!)
    this.modalOpenRegistraAtencion = true
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event.title);
    console.log(event.cssClass);
    this.openModal(Number(event.cssClass))
  }

  obtenerFechaActual(): Date {
    const fecha = new Date();
    fecha.setHours(0, 0, 0, 0); // Establecer las horas, minutos, segundos y milisegundos a 0 para tener solo la fecha.
    return fecha;
  }

}
