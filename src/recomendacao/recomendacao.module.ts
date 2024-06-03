import { Module } from '@nestjs/common';
import { RecomendacaoService } from './services/recomendacao.service';
import { RecomendacaoController } from './controllers/recomendacao.controller';
import { ProductService } from 'src/product/services/product.service';
import { StoreService } from 'src/store/services/store.service';
import { UserService } from 'src/user/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/product/entities/product.entity';
import { StoreSchema } from 'src/store/entities/store.entity';
import { UserSchema } from 'src/user/entities/user.entity';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [RecomendacaoController],
  providers: [
    RecomendacaoService,
    ProductService,
    StoreService,
    UserService
  ],
  
})
export class RecomendacaoModule {}
