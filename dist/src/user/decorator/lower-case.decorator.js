"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainsLowercase = exports.ContainsLowercaseConstraint = void 0;
const class_validator_1 = require("class-validator");
let ContainsLowercaseConstraint = class ContainsLowercaseConstraint {
    validate(text, args) {
        const [minLowercase] = args.constraints;
        const lowercaseCount = text.split('').filter(char => /[a-z]/.test(char)).length;
        return lowercaseCount >= minLowercase;
    }
    defaultMessage(args) {
        const [minLowercase] = args.constraints;
        return `Deve conter no minimo ${minLowercase} letras minúscula(s)`;
    }
};
exports.ContainsLowercaseConstraint = ContainsLowercaseConstraint;
exports.ContainsLowercaseConstraint = ContainsLowercaseConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], ContainsLowercaseConstraint);
function ContainsLowercase(minLowercase, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [minLowercase],
            validator: ContainsLowercaseConstraint,
        });
    };
}
exports.ContainsLowercase = ContainsLowercase;
//# sourceMappingURL=lower-case.decorator.js.map