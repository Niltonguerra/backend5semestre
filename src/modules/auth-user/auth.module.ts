import {  Module} from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from 'src/modules/user/entities/user.entity';
import { AuthUserService } from './services/authUser.service';
import { UserModule } from 'src/modules/user/user.module';
import { UserService } from 'src/modules/user/services/user.service';
import { JwtStrategyUser } from './strategies/jwt-user.strategy';
import { RolesGuardUser } from './guards/roles-user.guard';
import { JwtAuthGuardUser } from './guards/jwt-auth-user.guard';
import { PassportModule } from '@nestjs/passport';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: 'FomeFacil', 
      signOptions: { expiresIn: '24h' },
    }),
    UserModule,
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthUserService,
    UserService,
    JwtStrategyUser,
    RolesGuardUser,
    JwtAuthGuardUser
  ],
  exports: [
    JwtStrategyUser,
    RolesGuardUser,
    AuthUserService,
    JwtAuthGuardUser
  ],

})
export class AuthModule {}
