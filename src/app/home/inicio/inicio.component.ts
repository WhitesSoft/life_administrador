import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { ModalsService } from 'src/app/services/modals.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: setHours(setMinutes(new Date(), 1), 15),
      end: setHours(setMinutes(new Date(), 1), 16),
      title: 'Juan Montero',
    },
    {
      title: 'Pedro Ochoa',
      start: setHours(setMinutes(new Date(), 1), 8),
      end: setHours(setMinutes(new Date(), 1), 9),
    },
    {
      title: 'Megan Fox',
      start: setHours(setMinutes(new Date(), 1), 11),
      end: setHours(setMinutes(new Date(), 1), 12),
    },
  ];

  modalOpen = false

  constructor(private modalService: ModalsService) { }

  ngOnInit() {
    // Escuchamos el observable
    this.modalService.$modalRegistrarPaciente.subscribe((data) => { this.modalOpen = data })
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event.title);
    this.modalOpen = true
    console.log(this.modalOpen);
  }

}
