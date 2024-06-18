import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsTime(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isTime',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') {
            return false;
          }
          const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
          return timeRegex.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid time in the format HH:mm`;
        },
      },
    });
  };
}
