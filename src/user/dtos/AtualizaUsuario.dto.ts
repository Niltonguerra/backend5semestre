import { PartialType } from '@nestjs/mapped-types';
import { CriaUsuarioDTO } from './CriaUsuario.dto';


export class AtualizaUsuarioDto extends PartialType(CriaUsuarioDTO) {
  // Aqui, estamos usando a função PartialType para criar um tipo de DTO que aceita todos os 
  // campos de CriaUsuarioDTO, mas com a opção de torná-los opcionais. Isso significa que, ao atualizar 
  // um produto, você pode enviar apenas os campos que deseja atualizar, sem a necessidade de enviar todos 
  // os campos obrigatórios.
}
