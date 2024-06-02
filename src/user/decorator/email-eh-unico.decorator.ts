import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../services/user.service';


@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

  constructor(private readonly service: UserService) {console.log("contructor propriedade:"+ service)}

  async validate(email: string, args: ValidationArguments): Promise<boolean>  {
    const usuarioComEmailExiste = await this.service.findByField('email',email);
    console.log(usuarioComEmailExiste)
    return !usuarioComEmailExiste;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O email informado já está cadastrado';
  }
}

export function EmailEhUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailEhUnicoValidator,
    });
  };
}



