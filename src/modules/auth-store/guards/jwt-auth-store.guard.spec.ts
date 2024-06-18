import { JwtAuthGuardUser } from './jwt-auth-store.guard';

describe('JwtGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuardUser()).toBeDefined();
  });
});
