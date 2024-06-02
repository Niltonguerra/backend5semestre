import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CriaUsuarioDTO } from '../dtos/CriaUsuario.dto';
import { HashPasswordPipe } from '../pipes/passwordEncryption.pipe';
import { ListaUsuarioDTO } from '../dtos/ListaUsuario.dto';


@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}





// pesquisa por qualquer campo
  @Get('search/:campo/:valor')
  async findByField(
    @Param('campo') campo: string,
    @Param('valor') valor: string,
    @Query('limit') limit: number 
  ) {

    const retorno = await this.service.findByField(campo, valor, limit);

    return {
      resultado: retorno,
      message: 'Busca realizada com sucesso',
    };
  }





// pesquisa por id
  @Get('id/:id')
  async findById(@Param('id') id: string) {
    const retorno = await this.service.findById(id);

    return {
      usuario: retorno,
      message: 'encontrado com sucesso',
    };
  }




// puxa todos os usuários
  @Get('todos')
  async findAll() {

    const retorno = await this.service.findAll();

    return retorno;
  }


// cria um usuário
  @Post()
  @UsePipes(new ValidationPipe(), HashPasswordPipe)
  async create(@Body() user: CriaUsuarioDTO): Promise<{ usuario: ListaUsuarioDTO; message: string }> {
    const verificaEmail = await this.service.findByField('email', user.email);

    if (verificaEmail.length > 0) {
      return {
        message: 'E-mail já cadastrado',
        usuario: null,
      };
    }



    const newUser: User = {
      ...user,
      usuario_ativo: false,
      confirmado: false,
      tags: [],
      historico: [],
      criado_em: new Date(),
      atualizado_em: new Date(),
    };

    const retorno = await this.service.create(newUser);

    return {
      usuario: retorno,
      message: 'Criado com sucesso',
    };
  }

  


// edita um usuário
  @Put(':id')
  async update(@Body() user: User, @Param('id') id: string) {
    const retorno = await this.service.update(user, id);

    return {
      usuario: retorno,
      message: 'editado com sucesso',
    };
  }



// deleta um usuário
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const retorno = await this.service.remove(id);

    return {
      usuario: retorno,
      message: 'excluido com sucesso',
    };
  }

}
