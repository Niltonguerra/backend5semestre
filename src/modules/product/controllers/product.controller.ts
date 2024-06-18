import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';
import { CriaProductDTO } from '../dtos/CriarProduct.dto';
import { StoreService } from 'src/modules/store/services/store.service';
import { ServiceProductForStore } from '../services/productStore.service';
import { ListaProductDTO } from '../dtos/listaProduct.dto';
import { JwtAuthGuardStore } from 'src/modules/auth-store/guards/jwt-auth-store.guard';
import { RolesGuardStore } from 'src/modules/auth-store/guards/roles-store.guard';

@Controller('product')
export class ProductController {
  constructor(
    private readonly serviceProduct: ProductService,
    private readonly serviceStore: StoreService,
    private readonly serviceStoreProduct: ServiceProductForStore
  ) {}



  @Get('listaProdutosPorNomeDaLoja/:nome')
  async findProductsWithStore(@Param('nome') nome: string) {
    

    console.log("teste de nilton: "+ nome)
    const storeId:string = await this.serviceStore.findByName(nome);

    
    const retorno = await this.serviceStoreProduct.findStoreWithProducts(storeId);

    return retorno;
  }







@Get('search/:campo/:valor')
async findByField( 
  @Param('campo') campo: string, @Param('valor') valor: string,
  @Query('limit') limit: number ): 
    Promise<{ resultado: ListaProductDTO[]; message: string }>{

    const retorno:ListaProductDTO[] = await this.serviceProduct.findByField(campo, valor, limit);

    return {
      resultado: retorno,
      message: 'Busca realizada com sucesso',
    };
}


  @Get('todos')
  async findAll() {
    const retorno = await this.serviceProduct.findAll();

    return retorno;
  }








  @UseGuards(JwtAuthGuardStore, RolesGuardStore)
  @Post('create')
  async create(@Request() req, @Body() product:CriaProductDTO) {
    
    const storeId = req.user.userId;


    const newProduct: Product = {
      ...product,
      store_id: storeId,
      Criado_em: new Date(),
      atualizado_em: new Date(),
    }

    const existeStore = await this.serviceStore.findById(storeId);


    if (!existeStore) {
      return {
        message: 'Loja não encontrada',
      };
    }


    // cadastra do produto
    const retorno = await this.serviceProduct.create(newProduct);

    // atualiza o id do produto na loja
    const storeData = await this.serviceStore.updateProductIdForStore(retorno._id.toString(), storeId);

    return {
      usuario: retorno,
      message: 'criado com sucesso',
    };

  }



  @UseGuards(JwtAuthGuardStore, RolesGuardStore)
  @Put('update')
  async update(@Request() req, @Body() product: Product) {
    
    const storeId = req.user.userId;
    
    const retorno = await this.serviceProduct.update(product, storeId);

    return {
      usuario: retorno,
      message: 'editado com sucesso',
    };
  }

  @UseGuards(JwtAuthGuardStore, RolesGuardStore)
  @Delete('delete')
  async remove(@Request() req) {

    const storeId = req.user.userId;
    
    const retorno = await this.serviceProduct.remove(storeId);

    return {
      usuario: retorno,
      message: 'excluido com sucesso',
    };
  }
  
}
