import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bcrypt from 'bcrypt';



@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {

    if ((req.body as any).senha) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash((req.body as any).senha, saltRounds);

      (req.body as any).senha = hashedPassword;
    }
    next();
  }
}
