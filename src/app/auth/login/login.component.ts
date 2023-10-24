import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/LoginUsuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginUsuario!: LoginUsuario
  usuario = ''
  password = ''

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService) {

  }

  ngOnInit() {

  }

  login() {

    console.log(this.usuario, this.password);

    this.loginUsuario = new LoginUsuario(this.usuario, this.password)

    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setUsuario(data.usuario.toString())
        this.tokenService.setCorreo(data.correo.toString())
        this.tokenService.setToken(data.token.toString())
        this.tokenService.setRoles(data.roles)
        this.router.navigate(['/dashboard/inicio']);
      },
      err => {
        console.log(err);
      }
    )


    //this.router.navigate(['/dashboard/inicio']);
  }

}
