import { AuthStoreMiddleware } from './auth-store.middleware';

describe('AuthMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthStoreMiddleware()).toBeDefined();
  });
});
