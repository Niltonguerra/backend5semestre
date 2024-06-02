import { IsDate, isDate, IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { IsTelefone } from '../decorator/telefone-brasil.decorator';
import { EmailEhUnico } from '../decorator/email-eh-unico.decorator';
import { ContainsUppercase } from '../decorator/upper-case.decorator';
import { ContainsLowercase } from '../decorator/lower-case.decorator';
import { ContainsNumber } from '../decorator/number.decorator';




export class LoginUserDTO {

  // @EmailEhUnico({ message: 'O e-mail informado já está em uso' })
  @IsEmail({}, { message: 'O email informado é inválido' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @IsString({ message: 'A senha deve ser uma string'})
  senha: string;

}