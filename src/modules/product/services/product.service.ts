import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../entities/product.entity';
import { Model } from 'mongoose';
import { ListaProductDTO, ListaProductInternoDTO } from '../dtos/listaProduct.dto';



@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}




  async findByField(campo: string, valor: string, limit?: number):Promise<ListaProductDTO[]> {
    try{
      let query = {};

      query[campo] = valor;

      let searchQuery = this.productModel.find(query);

      if (limit) {
        searchQuery = searchQuery.limit(limit);
      }

      const data: Product[] | null = await searchQuery.exec();

      if(!data) {
        throw new Error('Erro ao buscar os produtos pelo campo informado');
      }

      const retorno: ListaProductDTO[] = data.map((product: ListaProductDTO) => {
        return {
          nome: product.nome,
          descricao: product.descricao,
          preco: product.preco,
          quantidade: product.quantidade,
          foto: product.foto,
          tags: product.tags,
        };
      });

      return retorno;
    } catch (error) {
      console.error('erro ao tentar encontrar todos os produtos no service:', error);
      throw new Error('Erro ao buscar todos os produtos no service');
    }
  }





  async create(doc: Product) {
    const result = await new this.productModel(doc).save();
    return result;
  }




  async findAll(): Promise<Product[]> {

    const pesquisado  = await this.productModel.find().exec();

    return pesquisado;
  }



  async findAllRecomendation(): Promise<ListaProductInternoDTO[]> {

    const pesquisado  = await this.productModel.find().exec();

    const result: ListaProductInternoDTO[] = pesquisado.map((product) => {
      return {
        _id: product._id.toString(),
        store_id: product.store_id,
        tags: product.tags,
        nome: product.nome,
        descricao: product.descricao,
        preco: product.preco,
        quantidade: product.quantidade,
        foto: product.foto,
        criado_em: product.Criado_em,
        atualizado_em: product.atualizado_em,
      };
    });
    
    return result;
  }


  async findById(id: string) {
    const result = await this.productModel.findById(id).exec();
    return result;
  }



  async update(Product: Product, id: string) {
    const updatedproduct = await this.productModel
      .findByIdAndUpdate(id, Product, { new: true })
      .exec();
    return updatedproduct;
  }



  async remove(id: string) {
    const deletedproduct = await this.productModel.findByIdAndDelete(id).exec();
    return deletedproduct;
  }

}
