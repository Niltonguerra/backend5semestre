import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bcrypt from 'bcrypt';






// vale ressaltar que esse middleware não está sendo usado no momento por conta de ele atuar antes  
// da atuação do decorator, mas como ele pode ser útil em outros momentos, ele foi mantido no projeto


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
