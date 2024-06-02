import { SetMetadata } from '@nestjs/common';

export const Payment = (...args: string[]) => SetMetadata('payment', args);
