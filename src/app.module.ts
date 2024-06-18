import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';
import { StoreModule } from './modules/store/store.module';
import { APP_PIPE } from '@nestjs/core';
import { PaymentModule } from './modules/payment/payment.module';
import { AuthModule } from './modules/auth-user/auth.module';
import { RecomendacaoModule } from './modules/recomendacao/recomendacao.module';
import { AuthStoreModule } from './modules/auth-store/auth-store.module';



const mongoUri = process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URI_PROD
  : process.env.MONGO_URI_TEST;

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://niltondg30:1234567890@cluster0.l1fxv8v.mongodb.net/QA?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule,
    ProductModule,
    StoreModule,
    PaymentModule,
    AuthModule,
    RecomendacaoModule,
    AuthStoreModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useFactory: () => new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {
}