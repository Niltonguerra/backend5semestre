import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class ContainsUppercaseConstraint implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function ContainsUppercase(minUppercase: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
