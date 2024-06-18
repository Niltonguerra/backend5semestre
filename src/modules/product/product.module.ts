import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entities/product.entity';
import { StoreService } from 'src/modules/store/services/store.service';
import { StoreSchema } from 'src/modules/store/entities/store.entity';
import { ServiceProductForStore } from './services/productStore.service';
import { JwtService } from '@nestjs/jwt';
import { RolesGuardStore } from '../auth-store/guards/roles-store.guard';
import { JwtAuthGuardStore } from '../auth-store/guards/jwt-auth-store.guard';



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
    JwtService,
    RolesGuardStore,
    JwtAuthGuardStore
  ],
})
export class ProductModule {}
