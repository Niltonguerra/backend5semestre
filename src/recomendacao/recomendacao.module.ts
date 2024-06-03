import { Module } from '@nestjs/common';
import { RecomendacaoService } from './recomendacao.service';
import { RecomendacaoController } from './recomendacao.controller';

@Module({
  providers: [RecomendacaoService],
  controllers: [RecomendacaoController]
})
export class RecomendacaoModule {}
