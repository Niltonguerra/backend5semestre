import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class ContainsNumberConstraint implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function ContainsNumber(minNumbers: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
