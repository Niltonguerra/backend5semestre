import { Test, TestingModule } from '@nestjs/testing';
import { AuthStoreService } from './authStore.service';

describe('AuthStoreService', () => {
  let service: AuthStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthStoreService],
    }).compile();

    service = module.get<AuthStoreService>(AuthStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
