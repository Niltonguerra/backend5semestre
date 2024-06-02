import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class ContainsNumberConstraint implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const [minNumbers] = args.constraints;
    const numberCount = text.split('').filter(char => /\d/.test(char)).length;
    return numberCount >= minNumbers; // Verifica se há pelo menos minNumbers números
  }

  defaultMessage(args: ValidationArguments) {
    const [minNumbers] = args.constraints;
    return `Deve conter no ${minNumbers} números(s)`;
  }
}

export function ContainsNumber(minNumbers: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [minNumbers],
      validator: ContainsNumberConstraint,
    });
  };
}
