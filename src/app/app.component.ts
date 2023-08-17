import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life_administrador';

  sidebarOpen = true;
  darkMode = false;

  menuItems = [
    { title: "Inicio", iconClass: "bi-house" },
    { title: "Horarios", iconClass: "bi-calendar-week" },
    { title: "Historiales", iconClass: "bi-file-medical" },
    { title: "Pacientes", iconClass: "bi-file-earmark-person" },
    { title: "Opciones", iconClass: "bi-gear" },
    { title: "Salir", iconClass: "bi-box-arrow-left" },
  ]

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

}
