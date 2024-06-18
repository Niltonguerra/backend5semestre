import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (value.senha) {
      const saltRounds = 10; // Número de rounds de encriptação (custo)
      value.senha = await bcrypt.hash(value.senha, saltRounds);
    }
    return value;
  }
}
