import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  sidebarOpen = true;
  darkMode = false;

  menuItems = [
    { title: "Inicio", iconClass: "bi-house", routerLink: "/dashboard/inicio" },
    // { title: "Horarios", iconClass: "bi-calendar-week", routerLink: "/inicio" },
    // { title: "Historiales", iconClass: "bi-file-medical", routerLink: "/inicio" },
    { title: "Pacientes", iconClass: "bi-file-earmark-person", routerLink: "/dashboard/pacientes" },
    { title: "Notificaciones", iconClass: "bi-bell-fill", routerLink: "/dashboard/notificaciones" },
    { title: "Pagos", iconClass: "bi-currency-dollar", routerLink: "/dashboard/pagos" },
    { title: "Personal", iconClass: "bi-person-vcard", routerLink: "/dashboard/personal" },
    // { title: "Opciones", iconClass: "bi-gear", routerLink: "" },
    { title: "Salir", iconClass: "bi-box-arrow-left", routerLink: "/login" },
  ]

  constructor(private router: Router) {}

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
