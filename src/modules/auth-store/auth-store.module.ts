import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { StoreModule } from '../store/store.module';
import { StoreService } from '../store/services/store.service';
import { StoreAuthService } from './services/auth-store.service';
import { JwtStrategyStore } from './strategies/jwt-store.strategy';
import { RolesGuardStore } from './guards/roles-store.guard';
import { JwtAuthGuardStore } from './guards/jwt-auth-store.guard';
import { AuthStoreController } from './controllers/auth-store.controller';
import { StoreSchema } from '../store/entities/store.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
    StoreModule,
    PassportModule,
    JwtModule.register({
      secret: 'FomeFacil',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [
    AuthStoreController, // Verifique se o controlador está no caminho correto
  ],
  providers: [
    StoreAuthService,
    StoreService,
    JwtStrategyStore,
    RolesGuardStore,
    JwtAuthGuardStore,
  ],
  exports: [
    JwtStrategyStore,
    RolesGuardStore,
    StoreAuthService,
    JwtAuthGuardStore,
  ],
})
export class AuthStoreModule {}
