import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life_administrador';

  constructor(private router: Router) {}

  sidebarOpen = true;
  darkMode = false;

  menuItems = [
    { title: "Inicio", iconClass: "bi-house", routerLink: "/inicio" },
    { title: "Horarios", iconClass: "bi-calendar-week", routerLink: "/inicio" },
    { title: "Historiales", iconClass: "bi-file-medical", routerLink: "/inicio" },
    { title: "Pacientes", iconClass: "bi-file-earmark-person", routerLink: "/pacientes" },
    { title: "Opciones", iconClass: "bi-gear", routerLink: "/inicio" },
    { title: "Salir", iconClass: "bi-box-arrow-left", routerLink: "/inicio" },
  ]

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

}
