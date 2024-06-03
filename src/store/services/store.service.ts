import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from '../entities/store.entity';
import { Model, Types } from 'mongoose';
import { LoginStoreDTO } from '../dtos/LoginStore.dto';
import { AtualizaStoreDto } from '../dtos/AtualizarStore.dto';
import { ListaStoreDTO } from '../dtos/listaStore.dto';


@Injectable()
export class StoreService {
  constructor(@InjectModel('Store') private readonly storeModel: Model<Store>) {}

  async create(doc: any) {
    const result = await new this.storeModel(doc).save();
    return result;
  }

  async findAll(): Promise<ListaStoreDTO[]> {

    const data = await this.storeModel.find().exec()


    const retorno: ListaStoreDTO[] = data.map(item => ({
      _id: item._id.toString(),
      nome: item.nome,
      email: item.email,
      CNPJ: item.CNPJ, 
      descricao: item.descricao, 
      foto: item.foto, 
      hor_abertura: item.hor_abertura, 
      hor_encerramento: item.hor_encerramento, 
      telefone: item.telefone, 
      endereco: item.endereco, 
      product_id : item.product_id ? item.product_id.toString() : 'não tem produtos relacionados a essa loja',
    }));


    return retorno;
  }

  async findById(id: string) {
    const result = await this.storeModel.findById(id).exec();
    return result;
  }

  async findByEmail(valor: string) {
    const pesquisa = await this.storeModel.findOne({ email: valor }).exec();

    if (!pesquisa) {
      return null;
    }

    const result: LoginStoreDTO = {
      email: pesquisa.email,
      senha: pesquisa.senha,
    };
    
    return result;
  }


  async findByField(campo: string, valor: string, limit?: number) {
    let query = {};
    query[campo] = valor;

    let searchQuery = this.storeModel.find(query);
    if (limit) {
      searchQuery = searchQuery.limit(limit);
    }

    const result = await searchQuery.exec();

    return result;
  }







  async update(store: AtualizaStoreDto, id: string) {
    const updatedStore = await this.storeModel
      .findByIdAndUpdate(id, store, { new: true })
      .exec();
    return updatedStore;
  }


  async updateProductIdForStore(ProductID: string, StoreID: string) {
    
    const product = await this.findById(StoreID); 
  
    let ProductIDNovo: string[];
  
    // Verifica se o campo product_id existe no documento da loja
    if (product.product_id && Array.isArray(product.product_id)) {
      ProductIDNovo = [...product.product_id];
    } else {
      ProductIDNovo = [];
    }
  
    // Verifica se o novo ProductID já existe no array
    // if (!ProductIDNovo.includes(ProductID)) {
      // Adiciona o novo ID de produto ao array
      ProductIDNovo.push(ProductID);
    // }
  
    const updatedStore = await this.storeModel
      .findByIdAndUpdate(StoreID, { product_id: ProductIDNovo }, { new: true })
      .exec();
  
    console.log(updatedStore);
  
    return updatedStore;
  }
  
  
  



  async remove(id: string) {
    const deletedStore = await this.storeModel.findByIdAndDelete(id).exec();
    return deletedStore;
  }
}
