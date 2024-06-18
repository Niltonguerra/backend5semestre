import { IsArray, IsDate, isDate, IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { IsTelefone } from '../decorator/telefone-brasil.decorator';
import { EmailEhUnico } from '../decorator/email-eh-unico.decorator';
import { ContainsUppercase } from '../decorator/upper-case.decorator';
import { ContainsLowercase } from '../decorator/lower-case.decorator';
import { ContainsNumber } from '../decorator/number.decorator';
import { IsDateFormat } from '../decorator/Date.decorator';




export class CriaUsuarioDTO {

  // @EmailEhUnico({ message: 'O e-mail informado já está em uso' })
  @IsEmail({}, { message: 'O email informado é inválido' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  // @EmailEhUnico({ message: 'O email informado já está cadastrado' })
  email: string;



  @ContainsLowercase(2,{ message: 'A senha deve ter 2 letras minúsculas no mínimo'})
  @ContainsUppercase(2,{ message: 'A senha deve ter 2 letras maiúsculas no mínimo'})
  @IsString({ message: 'A senha deve ser uma string'})
  @MinLength(8, { message: 'A senha precisa ter pelo menos 8 caracteres'})
  @MaxLength(16, { message: 'A senha precisa ter no máximo 16 caracteres'})
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @ContainsNumber(2, { message: 'A senha precisa ter pelo menos 2 números'})
  senha: string;


  @IsTelefone({ message: 'O telefone informado é inválido' })
  @IsNotEmpty({ message: 'O telefone não pode ser vazio' })
  telefone: string;



  @MaxLength(40, { message: 'seu nome é muito grande, deve ter no máximo 70 caracteres' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;


  @IsUrl({}, { message: 'A foto deve ser uma URL válida' })
  foto: string;


  @IsNotEmpty({ message: 'A data de nascimento não pode ser vazio' })
  @IsDateFormat()
  data_nasc: Date;

  @IsNotEmpty({ message: 'O endereço não pode ser vazio' })
  @IsString({ message: 'o Endereço deve ser uma string'})
  endereco: string[];


  @IsNotEmpty({ message: 'As tags não podem ser vazias' })
  @IsArray({ message: 'As tags devem ser strings'})
  tags: string[];

}


