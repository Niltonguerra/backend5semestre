"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainsUppercase = exports.ContainsUppercaseConstraint = void 0;
const class_validator_1 = require("class-validator");
let ContainsUppercaseConstraint = class ContainsUppercaseConstraint {
    validate(text, args) {
        const [minUppercase] = args.constraints;
        const uppercaseCount = text.split('').filter(char => /[A-Z]/.test(char)).length;
        return uppercaseCount >= minUppercase;
    }
    defaultMessage(args) {
        const [minUppercase] = args.constraints;
        return `Deve conter no minimo ${minUppercase} letras maiúscula(s)`;
    }
};
exports.ContainsUppercaseConstraint = ContainsUppercaseConstraint;
exports.ContainsUppercaseConstraint = ContainsUppercaseConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], ContainsUppercaseConstraint);
function ContainsUppercase(minUppercase, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [minUppercase],
            validator: ContainsUppercaseConstraint,
        });
    };
}
exports.ContainsUppercase = ContainsUppercase;
//# sourceMappingURL=upper-case.decorator.js.map