import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class ContainsLowercaseConstraint implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function ContainsLowercase(minLowercase: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
