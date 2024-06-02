import { NestMiddleware } from '@nestjs/common';
export declare class PaymentMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
