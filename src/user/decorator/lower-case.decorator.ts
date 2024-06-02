import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class ContainsLowercaseConstraint implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const [minLowercase] = args.constraints;
    const lowercaseCount = text.split('').filter(char => /[a-z]/.test(char)).length;
    return lowercaseCount >= minLowercase; // Verifica se há pelo menos minLowercase letras minúsculas
  }

  defaultMessage(args: ValidationArguments) {
    const [minLowercase] = args.constraints;
    return `Deve conter no minimo ${minLowercase} letras minúscula(s)`;
  }
}

export function ContainsLowercase(minLowercase: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [minLowercase],
      validator: ContainsLowercaseConstraint,
    });
  };
}
