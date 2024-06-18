import { Test, TestingModule } from '@nestjs/testing';
import { LojaController } from './store.controller';
import { LojaService } from '../services/store.service';

describe('LojaController', () => {
  let controller: LojaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LojaController],
      providers: [LojaService],
    }).compile();

    controller = module.get<LojaController>(LojaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
