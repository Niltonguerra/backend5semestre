import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { StoreModule } from './store/store.module';
import { APP_PIPE } from '@nestjs/core';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { RecomendacaoModule } from './recomendacao/recomendacao.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://niltondg30:1234567890@cluster0.l1fxv8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule,
    ProductModule,
    StoreModule,
    PaymentModule,
    AuthModule,
    RecomendacaoModule,
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