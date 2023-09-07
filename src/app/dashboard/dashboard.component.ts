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
    { title: "Turnos", iconClass: "bi-calendar-week", routerLink: "/dashboard/turnos" },
    { title: "Historiales", iconClass: "bi-file-medical", routerLink: "/inicio" },
    { title: "Pacientes", iconClass: "bi-file-earmark-person", routerLink: "/dashboard/pacientes" },
    { title: "Notificaciones", iconClass: "bi-bell-fill", routerLink: "/dashboard/notificaciones" },
    { title: "Pagos", iconClass: "bi-currency-dollar", routerLink: "/dashboard/pagos" },
    { title: "Personal", iconClass: "bi-person-vcard", routerLink: "/dashboard/personal" },
    { title: "Proveedores", iconClass: "bi-person-gear", routerLink: "/dashboard/proveedor" },
    { title: "Inventario", iconClass: "bi-shop", routerLink: "/dashboard/inventario" },
    { title: "Horario", iconClass: "bi-hourglass-split", routerLink: "/dashboard/horario" },
    { title: "Reportes", iconClass: "bi-flag-fill", routerLink: "/dashboard/reportes" },
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
