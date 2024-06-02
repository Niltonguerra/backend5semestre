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


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
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