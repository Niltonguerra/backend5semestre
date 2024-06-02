import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

// Função de validação personalizada para verificar se a data está no formato "dd/mm/aaaa"
function isValidDateFormat(value: string): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/; // Expressão regular para o formato "dd/mm/aaaa"
    return regex.test(value);
}

// Decorator personalizado para validar o formato da data
export function IsDateFormat(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            name: 'isDateFormat',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return isValidDateFormat(value);
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} must be in the format dd/mm/yyyy`;
                }
            }
        });
    };
}
