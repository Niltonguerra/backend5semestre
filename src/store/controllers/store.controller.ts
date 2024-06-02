import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StoreService } from '../services/store.service';
import { Store } from '../entities/store.entity';
import { HashPasswordPipe } from '../pipes/passwordEncryption.pipe';
import { CriaProductDTO } from 'src/product/dtos/CriarProduct.dto';
import { CriaStoreDTO } from '../dtos/CriarStore.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly service: StoreService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    const retorno = await this.service.findById(id);

    return {
      usuario: retorno,
      message: 'encontrado com sucesso',
    };
  }

  @Get()
  async findAll() {
    const retorno = await this.service.findAll();

    return retorno;
  }










  @Post()
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






  @Put(':id')
  async update(@Body() store: Store, @Param('id') id: string) {
    const retorno = await this.service.update(store, id);

    return {
      usuario: retorno,
      message: 'editado com sucesso',
    };
  }












  @Delete(':id')
  async remove(@Param('id') id: string) {
    const retorno = await this.service.remove(id);

    return {
      usuario: retorno,
      message: 'excluido com sucesso',
    };
  }
}
