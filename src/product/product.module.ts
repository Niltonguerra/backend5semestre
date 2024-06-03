import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entities/product.entity';
import { StoreService } from 'src/store/services/store.service';
import { StoreSchema } from 'src/store/entities/store.entity';
import { ServiceProductForStore } from './services/productStore.service';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
  ],
  controllers: [ProductController],
  providers: [
    ServiceProductForStore,
    ProductService,
    StoreService,
  ],
})
export class ProductModule {}
