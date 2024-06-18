import { AdministratorGuard } from './administrator.guard';

describe('AdministratorGuard', () => {
  it('should be defined', () => {
    expect(new AdministratorGuard()).toBeDefined();
  });
});
