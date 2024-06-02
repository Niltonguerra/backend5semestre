import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

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
  async create(@Body() product: Product) {
    const retorno = await this.service.create(product);

    return {
      usuario: retorno,
      message: 'criado com sucesso',
    };
  }

  @Put(':id')
  async update(@Body() product: Product, @Param('id') id: string) {
    const retorno = await this.service.update(product, id);

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
