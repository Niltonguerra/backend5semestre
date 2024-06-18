import { JwtAuthGuardUser } from './jwt-auth-user.guard';

describe('JwtGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuardUser()).toBeDefined();
  });
});
