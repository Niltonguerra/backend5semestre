import { Test, TestingModule } from '@nestjs/testing';
import { RecomendacaoService } from './recomendacao.service';

describe('RecomendacaoService', () => {
  let service: RecomendacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecomendacaoService],
    }).compile();

    service = module.get<RecomendacaoService>(RecomendacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
