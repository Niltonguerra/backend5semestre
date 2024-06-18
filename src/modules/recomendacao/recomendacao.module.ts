import { Module } from '@nestjs/common';
import { RecomendacaoService } from './services/recomendacao.service';
import { RecomendacaoController } from './controllers/recomendacao.controller';
import { ProductService } from 'src/modules/product/services/product.service';
import { StoreService } from 'src/modules/store/services/store.service';
import { UserService } from 'src/modules/user/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/modules/product/entities/product.entity';
import { StoreSchema } from 'src/modules/store/entities/store.entity';
import { UserSchema } from 'src/modules/user/entities/user.entity';
import { JwtAuthGuardUser } from '../auth-user/guards/jwt-auth-user.guard';
import { JwtService } from '@nestjs/jwt';
import { RolesGuardUser } from '../auth-user/guards/roles-user.guard';

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
    UserService,
    JwtAuthGuardUser,
    JwtService,
    RolesGuardUser
  ],
  
})
export class RecomendacaoModule {}
