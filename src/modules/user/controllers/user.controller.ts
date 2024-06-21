import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post, Put, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CriaUsuarioDTO } from '../dtos/CriaUsuario.dto';
import { HashPasswordPipe } from '../pipes/passwordEncryption.pipe';
import { ListaUsuarioDTO, ListaUsuarioRetorno} from '../dtos/ListaUsuario.dto';
import { RolesGuardUser } from 'src/modules/auth-user/guards/roles-user.guard';
import { JwtStrategyUser } from 'src/modules/auth-user/strategies/jwt-user.strategy';
import { JwtAuthGuardUser } from 'src/modules/auth-user/guards/jwt-auth-user.guard';
import { AtualizaUsuarioDTO } from '../dtos/AtualizaUsuario.dto';


@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}


// rotas do frontend e do usuário
  @Get('search/:campo/:valor')
  async findByField( 
    @Param('campo') campo: string, @Param('valor') valor: string,
    @Query('limit') limit: number ): 
    Promise<{ resultado: ListaUsuarioDTO[]; message: string }>{

      const retorno:ListaUsuarioDTO[] = await this.service.findByField(campo, valor, limit);

      return {
        resultado: retorno,
        message: 'Busca realizada com sucesso',
      };
  }


  @Get('todos')
  async findAll(): Promise<{ usuario: ListaUsuarioDTO[]; message: string }> {
    const usuario: ListaUsuarioDTO[] = await this.service.findAll();
    return {
      usuario,
      message: "todos os usuários encontrados com sucesso!"
    };
  }


  @Post('create')
  @UsePipes(new ValidationPipe(), HashPasswordPipe)
  async create(@Body() user: CriaUsuarioDTO): 
  Promise<{ usuario: ListaUsuarioRetorno; message: string }> {

    const verificaEmail:ListaUsuarioDTO[] = await this.service.findByField('email', user.email);

    if (verificaEmail.length > 0) {
      throw new Error('Email já cadastrado');
    }

    const retorno:ListaUsuarioRetorno = await this.service.create(user);

    return {
      usuario: retorno,
      message: 'Criado com sucesso!',
    };
  }


// rota do usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('read')
  async findById(@Request() req): Promise<{ usuario: ListaUsuarioDTO; message: string }> {

    const userId = req.user.userId;

    const usuario: ListaUsuarioDTO  = await this.service.findById(userId);

    return {
      usuario,
      message: 'Usuário encontrado com sucesso',
    };
  }

  // rota do usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Put('update')
  async update( @Request() req, @Body() user: AtualizaUsuarioDTO): 
  Promise<{ 
    usuario: ListaUsuarioRetorno; 
    message: string }> {

    const userId = req.user.userId;

    const retorno:ListaUsuarioRetorno = await this.service.update(user, userId);

    return {
      usuario: retorno,
      message: 'editado com sucesso!'
    };
  }


  // rota do usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Delete('disable')
  async remove(@Request() req): Promise<{retorno:ListaUsuarioRetorno, message: String }> {

    const userId = req.user.userId;

    const retorno:ListaUsuarioRetorno = await this.service.disable(userId);

    return {
      retorno: retorno,
      message:  "conta desativada com sucesso",
    };
  }

}
