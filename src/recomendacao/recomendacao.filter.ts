import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class RecomendacaoFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
