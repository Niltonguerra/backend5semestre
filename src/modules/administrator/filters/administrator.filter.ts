import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AdministratorFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
