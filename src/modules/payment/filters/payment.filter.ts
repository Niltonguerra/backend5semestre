import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class PaymentFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
