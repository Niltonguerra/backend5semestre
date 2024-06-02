import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class HashPasswordPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
