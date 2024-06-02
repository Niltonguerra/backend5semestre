import { Injectable } from '@nestjs/common';
import { 
  registerDecorator, 
  ValidationOptions, 
  ValidatorConstraint, 
  ValidatorConstraintInterface, 
  ValidationArguments } 
  from 'class-validator';





@Injectable()
@ValidatorConstraint({ async: true })
class IsTelefoneConstraint implements ValidatorConstraintInterface {

  validate(telefone: string, args: ValidationArguments) {
    const telefoneRegex = /^(\+55)?[\s]?\(?(\d{2})?\)?[\s-]?(9?\d{4}[\s-]?\d{4})$/;
    return typeof telefone === 'string' && telefoneRegex.test(telefone);
  }

  defaultMessage(args: ValidationArguments) {
    return 'O telefone informado é inválido';
  }
}

// Define the decorator
export function IsTelefone(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsTelefoneConstraint,
    });
  };
}
