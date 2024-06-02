import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class ContainsUppercaseConstraint implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const [minUppercase] = args.constraints;
    const uppercaseCount = text.split('').filter(char => /[A-Z]/.test(char)).length;
    return uppercaseCount >= minUppercase; // Verifica se há pelo menos minUppercase letras maiúsculas
  }

  defaultMessage(args: ValidationArguments) {
    const [minUppercase] = args.constraints;
    return `Deve conter no minimo ${minUppercase} letras maiúscula(s)`;
  }
}

export function ContainsUppercase(minUppercase: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [minUppercase],
      validator: ContainsUppercaseConstraint,
    });
  };
}
