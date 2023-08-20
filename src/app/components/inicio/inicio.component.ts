import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';


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
      start: setHours(setMinutes(new Date(), 20), 15),
      end: setHours(setMinutes(new Date(), 30), 16),
      title: 'Juan Montero', 
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      
    },
  ];

}
