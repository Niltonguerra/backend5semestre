import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class PaymentFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
