import { 
  // MiddlewareConsumer, 
  Module, 
  // RequestMethod 
} from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user.service';
import { StoreService } from 'src/store/services/store.service';
import { StoreSchema } from 'src/store/entities/store.entity';
import { AuthUserService } from './services/authUser.service';
import { AuthStoreService } from './services/authStore.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
    JwtModule.register({
      secret: 'NiltonEMuitoLindo', // Troque por uma chave secreta forte
      signOptions: { expiresIn: '15m' }, // Tempo de expiração do token
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthUserService,
    AuthStoreService,
    StoreService,
    UserService,
  ],

})
export class AuthModule {}
