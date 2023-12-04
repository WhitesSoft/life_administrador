export class JwtDto {
  //los nombres de las variables deben ser igual a lo que se recibe del backend
  usuario!: String;
  correo!: String;
  roles!: String[];
  token!: String;
}
