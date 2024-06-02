import { NestMiddleware } from '@nestjs/common';
export declare class HashPasswordMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): Promise<void>;
}
