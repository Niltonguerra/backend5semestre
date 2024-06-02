import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

// Função de validação de CNPJ
function validarCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  
  if (cnpj.length !== 14) return false;

  // Verifica se todos os dígitos são iguais (caso especial)
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho += 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(1))) return false;

  return true;
}

// Decorator de validação de CNPJ
export function IsCNPJ(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsCNPJ',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;
          return validarCNPJ(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid CNPJ`;
        }
      }
    });
  };
}