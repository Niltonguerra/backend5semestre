import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from '../entities/store.entity';
import { Model } from 'mongoose';
import { LoginStoreDTO } from '../dtos/LoginStore.dto';

@Injectable()
export class StoreService {
  constructor(@InjectModel('Store') private readonly storeModel: Model<Store>) {}

  async create(doc: any) {
    const result = await new this.storeModel(doc).save();
    return result;
  }

  async findAll(): Promise<Store[]> {
    return this.storeModel.find().exec();
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







  async update(store: any, id: string) {
    const updatedStore = await this.storeModel
      .findByIdAndUpdate(id, store, { new: true })
      .exec();
    return updatedStore;
  }

  async remove(id: string) {
    const deletedStore = await this.storeModel.findByIdAndDelete(id).exec();
    return deletedStore;
  }
}
