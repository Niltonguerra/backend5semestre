import { IsEmail, IsNotEmpty, IsString } from 'class-validator';




export class AuthUserDTO {

  @IsEmail({}, { message: 'O email informado é inválido' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string'})
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  senha: string;
}

export class LoginUsuarioInternoDTO {
  _id:string;
  senha:string;
  nome: string;
  email: string;
}
