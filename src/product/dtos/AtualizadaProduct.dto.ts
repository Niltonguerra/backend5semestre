import { PartialType } from '@nestjs/mapped-types';
import { CriaProductDTO } from './CriarProduct.dto';


export class UpdateProductDto extends PartialType(CriaProductDTO) {
  // Aqui, estamos usando a função PartialType para criar um tipo de DTO que aceita todos os 
  // campos de CriaUsuarioDTO, mas com a opção de torná-los opcionais. Isso significa que, ao atualizar 
  // um produto, você pode enviar apenas os campos que deseja atualizar, sem a necessidade de enviar todos 
  // os campos obrigatórios.
}
