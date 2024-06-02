import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async create(doc: Product) {
    const result = await new this.productModel(doc).save();
    return result;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
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
