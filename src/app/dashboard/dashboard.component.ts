import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

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
    { title: "Pacientes", iconClass: "bi-file-earmark-person", routerLink: "/dashboard/pacientes" },
    { title: "Historiales", iconClass: "bi-file-medical", routerLink: "/dashboard/historiales" },
    { title: "Notificaciones", iconClass: "bi-bell-fill", routerLink: "/dashboard/notificaciones" },
    { title: "Pagos", iconClass: "bi-currency-dollar", routerLink: "/dashboard/pagos" },
    { title: "Personal", iconClass: "bi-person-vcard", routerLink: "/dashboard/personal" },
    { title: "Proveedores", iconClass: "bi-person-gear", routerLink: "/dashboard/proveedor" },
    { title: "Inventario", iconClass: "bi-shop", routerLink: "/dashboard/inventario" },
    { title: "Horario", iconClass: "bi-hourglass-split", routerLink: "/dashboard/horario" },
    { title: "Reportes", iconClass: "bi-flag-fill", routerLink: "/dashboard/reportes" },
    { title: "Salir", iconClass: "bi-box-arrow-left", routerLink: "/login" },
  ]

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  navigateTo(route: string) {
    if (route === '/login') {
      // borramos todo acceso
      this.tokenService.cerrarSesion()
      this.router.navigate([route]);
    } else {
      this.router.navigate([route]);
    }


  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

}
