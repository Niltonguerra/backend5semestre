import { SetMetadata } from '@nestjs/common';

export const Recomendacao = (...args: string[]) => SetMetadata('recomendacao', args);
