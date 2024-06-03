import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';
import { CriaProductDTO } from '../dtos/CriarProduct.dto';
import { StoreService } from 'src/store/services/store.service';
import { ListaProductForStoreDTO } from '../dtos/ListaProductForStore.dto';
import { ServiceProductForStore } from '../services/productStore.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly serviceProduct: ProductService,
    private readonly serviceStore: StoreService,
    private readonly serviceProductForStore: ServiceProductForStore,
  ) {}




  @Get('listaProdutosPorLoja/:id')
  async getStoreWithProducts(@Param('id') id: string): Promise<ListaProductForStoreDTO> {
    return this.serviceProductForStore.findStoreWithProducts(id);
  }


  @Get(':id')
  async findById(@Param('id') id: string) {
    const retorno = await this.serviceProduct.findById(id);




    
    return {
      nome: retorno,
      message: 'encontrado com sucesso',
    };
  }

  @Get()
  async findAll() {
    const retorno = await this.serviceProduct.findAll();

    return retorno;
  }









  @Post()
  async create(@Body() product:CriaProductDTO) {

    const newProduct: Product = {
      ...product,
      Criado_em: new Date(),
      atualizado_em: new Date(),
    }

    const existeStore = await this.serviceStore.findById(product.store_id);


    if (!existeStore) {
      return {
        message: 'Loja não encontrada',
      };
    }


    // cadastra do produto
    const retorno = await this.serviceProduct.create(newProduct);

    // atualiza o id do produto na loja
    const storeData = await this.serviceStore.updateProductIdForStore(retorno._id.toString(), product.store_id);

    return {
      usuario: retorno,
      message: 'criado com sucesso',
    };

  }













  @Put(':id')
  async update(@Body() product: Product, @Param('id') id: string) {
    const retorno = await this.serviceProduct.update(product, id);

    return {
      usuario: retorno,
      message: 'editado com sucesso',
    };
  }


  @Delete(':id')
  async remove(@Param('id') id: string) {
    const retorno = await this.serviceProduct.remove(id);

    return {
      usuario: retorno,
      message: 'excluido com sucesso',
    };
  }



}
