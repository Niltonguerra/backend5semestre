import { IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength } from 'class-validator';




export class CriaProductDTO {

  @MaxLength(40, { message: 'seu nome é muito grande, deve ter no máximo 70 caracteres' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;

  @IsNotEmpty({ message: 'O preço não pode ser vazio' })
  @IsUrl({}, { message: 'A foto deve ser uma URL válida' })
  foto: string;

  @IsNotEmpty({ message: 'O preço não pode ser vazio' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  preco: number;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  @IsString({ message: 'A descrição deve ser uma string' })
  descricao: string;


  @IsNotEmpty({ message: 'A quantidade não pode ser vazia' })
  @IsNumber({}, { message: 'A quantidade deve ser um número' })
  quantidade: number;


  @IsNotEmpty({ message: 'A loja não pode ser vazia, o produto deve estar relacionado a alguma loja' })
  @IsString({ message: 'A loja deve ser uma string' })
  store_id: string;

  

}