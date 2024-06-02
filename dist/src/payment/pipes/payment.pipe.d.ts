import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class PaymentPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
