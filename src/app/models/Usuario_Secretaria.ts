import { Secretaria } from "./Secretaria"

export class Usuario_Secretaria{

  usuario?: string
  password?: string
  correo?: string
  secretaria?: Secretaria

  constructor(usuario: string, password: string, correo: string, secretaria: Secretaria){
    this.usuario = usuario
    this.password = password
    this.correo = correo
    this.secretaria = secretaria
  }

}
