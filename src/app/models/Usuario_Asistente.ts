import { Asistente } from "./Asistente";

export class Usuario_Asistente{

  usuario?: string
  password?: string
  correo?: string
  asistente?: Asistente

  constructor(usuario: string, password: string, correo: string, asistente: Asistente){
    this.usuario = usuario
    this.password = password
    this.correo = correo
    this.asistente = asistente
  }

}
