import { PaymentMiddleware } from './payment.middleware';

describe('PaymentMiddleware', () => {
  it('should be defined', () => {
    expect(new PaymentMiddleware()).toBeDefined();
  });
});
