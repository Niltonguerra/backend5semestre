import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AuthFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
