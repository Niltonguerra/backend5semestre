import { Module } from '@nestjs/common';
import { StoreService } from './services/store.service';
import { StoreController } from './controllers/store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from './entities/store.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
