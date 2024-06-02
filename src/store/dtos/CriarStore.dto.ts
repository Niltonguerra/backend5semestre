import { IsDate, IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { IsTelefone } from '../decorator/telefone-brasil.decorator';

import { ContainsUppercase } from '../decorator/upper-case.decorator';
import { ContainsLowercase } from '../decorator/lower-case.decorator';
import { ContainsNumber } from '../decorator/number.decorator';
import { IsCNPJ } from '../decorator/CNPJ.decorator';
import { IsTime } from '../decorator/Hora.decorator';




export class CriaStoreDTO {



  @MaxLength(40, { message: 'seu nome é muito grande, deve ter no máximo 70 caracteres' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;

  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O CPNJ não pode ser vazio' })
  @IsCNPJ({ message: 'O CPNJ deve ser valido' })
  CNPJ: string;


  @ContainsLowercase(2,{ message: 'A senha deve ter 2 letras minúsculas no mínimo'})
  @ContainsUppercase(2,{ message: 'A senha deve ter 2 letras maiúsculas no mínimo'})
  @IsString({ message: 'A senha deve ser uma string'})
  @MinLength(8, { message: 'A senha precisa ter pelo menos 8 caracteres'})
  @MaxLength(16, { message: 'A senha precisa ter no máximo 16 caracteres'})
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @ContainsNumber(2, { message: 'A senha precisa ter pelo menos 2 números'})
  senha: string;

  @IsNotEmpty()
  @IsString({ message: 'A descrição deve ser uma string' })
  descricao: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'O email informado é inválido' })
  email: string;

  @IsNotEmpty()
  @IsUrl({}, { message: 'A foto deve ser uma URL válida' })
  foto: string;

  @IsNotEmpty()
  @IsTime({ message: 'o horário deve estar no formato HH:mm' })
  hor_abertura: string;


  @IsNotEmpty()
  @IsTime({ message: 'o horário deve estar no formato HH:mm' })
  hor_encerramento: string;


  @IsTelefone({ message: 'O telefone informado é inválido' })
  @IsNotEmpty({ message: 'O telefone não pode ser vazio' })
  telefone: string;

  @IsNotEmpty({ message: 'O endereço não pode ser vazio' })
  @IsString({ message: 'o Endereço deve ser uma string'})
  endereco: string;


}