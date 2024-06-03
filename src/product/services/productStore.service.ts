import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../entities/product.entity';
import { Model } from 'mongoose';
import { Store } from 'src/store/entities/store.entity';
import { ListaProductForStoreDTO } from '../dtos/ListaProductForStore.dto';

@Injectable()
export class ServiceProductForStore {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('Store') private readonly storeModel: Model<Store>,
  ) {}

  async findStoreWithProducts(storeId: string): Promise<ListaProductForStoreDTO> {
    
    
    const store = await this.storeModel.findById(storeId).populate('product_id').exec(); 
    
    if (!store) {
      throw new NotFoundException('loja não encontrada');
    }

    const products = await this.productModel.find({ _id: { $in: store.product_id } }).exec();

    return {
      storeId: store._id.toString(),
      storeName: store.nome,
      products: products,
    };
  }

}
