"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCNPJ = void 0;
const class_validator_1 = require("class-validator");
function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14)
        return false;
    if (/^(\d)\1+$/.test(cnpj))
        return false;
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0)))
        return false;
    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1)))
        return false;
    return true;
}
function IsCNPJ(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsCNPJ',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (typeof value !== 'string')
                        return false;
                    return validarCNPJ(value);
                },
                defaultMessage(args) {
                    return `${args.property} must be a valid CNPJ`;
                }
            }
        });
    };
}
exports.IsCNPJ = IsCNPJ;
//# sourceMappingURL=CNPJ.decorator.js.map