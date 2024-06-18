import { IsNotEmpty, IsString } from "class-validator";

export class LoginStoreDTO {


  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  @IsString({ message: 'O email deve ser uma string'})
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @IsString({ message: 'A senha deve ser uma string'})
  senha: string;
}