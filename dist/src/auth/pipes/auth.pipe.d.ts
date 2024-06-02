import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class AuthPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
