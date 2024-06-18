import { AdministratorMiddleware } from './administrator.middleware';

describe('AdministratorMiddleware', () => {
  it('should be defined', () => {
    expect(new AdministratorMiddleware()).toBeDefined();
  });
});
