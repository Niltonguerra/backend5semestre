import { Test, TestingModule } from '@nestjs/testing';
import { RecomendacaoController } from './recomendacao.controller';

describe('RecomendacaoController', () => {
  let controller: RecomendacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecomendacaoController],
    }).compile();

    controller = module.get<RecomendacaoController>(RecomendacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
