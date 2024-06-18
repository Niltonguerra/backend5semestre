import { Module } from '@nestjs/common';
import { StoreService } from './services/store.service';
import { StoreController } from './controllers/store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from './entities/store.entity';
import { JwtService } from '@nestjs/jwt';
import { RolesGuardStore } from '../auth-store/guards/roles-store.guard';
import { JwtAuthGuardStore } from '../auth-store/guards/jwt-auth-store.guard';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }])
  ],

  providers: [
    StoreService,
    JwtService,
    RolesGuardStore,
    JwtAuthGuardStore
  ],
  controllers: [
    StoreController
  ],
})
export class StoreModule {}
