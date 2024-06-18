import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { StoreService } from '../services/store.service';
import { Store } from '../entities/store.entity';
import { HashPasswordPipe } from '../pipes/passwordEncryption.pipe';
import { CriaStoreDTO } from '../dtos/CriarStore.dto';
import { AtualizaStoreDTO} from '../dtos/AtualizarStore.dto';
import { JwtAuthGuardStore } from 'src/modules/auth-store/guards/jwt-auth-store.guard';
import { RolesGuardStore } from 'src/modules/auth-store/guards/roles-store.guard';
import { ListaStoreDTO, ListaStoreRetorno } from '../dtos/listaStore.dto';



@Controller('store')
export class StoreController {
  constructor(private readonly service: StoreService) {}




// rotas do frontend e do usuário
@Get('search/:campo/:valor')
async findByField( 
  @Param('campo') campo: string, @Param('valor') valor: string,
  @Query('limit') limit: number ): 
    Promise<{ resultado: ListaStoreDTO[]; message: string }>{

    const retorno:ListaStoreDTO[] = await this.service.findByField(campo, valor, limit);

    return {
      resultado: retorno,
      message: 'Busca realizada com sucesso',
    };
}


@Get('todos')
async findAll(): Promise<{ usuario: ListaStoreDTO[]; message: string }> {
  const usuario: ListaStoreDTO[] = await this.service.findAll();
  return {
    usuario,
    message: "todos os usuários encontrados com sucesso!"
  };
}




  @Post('create')
  @UsePipes(new ValidationPipe(), HashPasswordPipe)
  async create(@Body() store: CriaStoreDTO) {

    const verificaEmail = await this.service.findByField('email', store.email);

    if (verificaEmail.length > 0) {
      return {
        message: 'E-mail já cadastrado',
        usuario: null,
      };
    }

    const verificaCNPJ = await this.service.findByField('CNPJ', store.CNPJ);

    if (verificaCNPJ.length > 0) {
      return {
        message: 'CPNJ já cadastrado',
        usuario: null,
      };
    }

    const newStore: Store = {
      ...store,
      confirmacao: false,
      store_ativo: true,
      criado_em: new Date(),
      atualizado_em: new Date(),
    };

    const retorno = await this.service.create(newStore);

    return {
      Store: retorno,
      message: 'criado com sucesso',
    };
  }





    // rota do usuário
    @UseGuards(JwtAuthGuardStore, RolesGuardStore)
    @Get('read')
    async ReadOwnerInformationStore(@Request() req): Promise<{ store: ListaStoreDTO; message: string }> {
  
      const storeId = req.user.userId; // id do usuário
      const store: ListaStoreDTO  = await this.service.findById(storeId);
  
      return {
        store,
        message: 'Loja encontrada com sucesso',
      };
    }



  // rota do usuário
  @UseGuards(JwtAuthGuardStore, RolesGuardStore)
  @Put('update')
  async update( @Request() req, @Body() user: AtualizaStoreDTO): Promise<{  usuario: ListaStoreRetorno; message: string }> {

    const storeId = req.user.userId;

    const retorno:ListaStoreRetorno = await this.service.update(user, storeId);

    return {
      usuario: retorno,
      message: 'editado com sucesso!'
    };
  }



  // rota do usuário
  @UseGuards(JwtAuthGuardStore, RolesGuardStore)
  @Delete('disable')
  async remove(@Request() req): Promise<{retorno:ListaStoreRetorno, message: String }> {

    const storeId = req.user.userId;

    const retorno = await this.service.disable(storeId);

    return {
      retorno: retorno,
      message: 'excluido com sucesso',
    };
  }
}
