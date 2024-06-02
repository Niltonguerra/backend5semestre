import { IsEmail, IsNotEmpty, IsString } from 'class-validator';




export class AuthStoreDTO {

  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  @IsString({ message: 'O email deve ser uma string' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string'})
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  senha: string;

}