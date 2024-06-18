import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AuthFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
