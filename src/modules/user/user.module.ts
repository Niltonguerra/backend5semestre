import { 
  // MiddlewareConsumer, 
  Module, 
  // NestModule, 
  // RequestMethod 
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
// import { EmailEhUnicoValidator } from './decorator/email-eh-unico.decorator';
// import { HashPasswordMiddleware } from './middleware/passwordEncryption.middleware';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { EmailEhUnicoValidator } from './decorator/email-eh-unico.decorator';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategyUser } from '../auth-user/strategies/jwt-user.strategy';
import { RolesGuardUser } from '../auth-user/guards/roles-user.guard';
import { JwtAuthGuardUser } from '../auth-user/guards/jwt-auth-user.guard';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [
    EmailEhUnicoValidator,
    UserService,
    JwtAuthGuardUser,
    JwtService,
    RolesGuardUser
  ],
  controllers: [
    UserController,
  ],

})

export class UserModule{}

// export class UserModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(HashPasswordMiddleware)
//            .forRoutes({ path: 'user', method: RequestMethod.POST },
//                       { path: 'user', method: RequestMethod.PUT },
//                       { path: 'user', method: RequestMethod.PATCH });
//   }
// }