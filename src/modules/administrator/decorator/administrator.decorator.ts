import { SetMetadata } from '@nestjs/common';

export const Administrator = (...args: string[]) => SetMetadata('administrator', args);
