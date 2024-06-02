"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainsNumber = exports.ContainsNumberConstraint = void 0;
const class_validator_1 = require("class-validator");
let ContainsNumberConstraint = class ContainsNumberConstraint {
    validate(text, args) {
        const [minNumbers] = args.constraints;
        const numberCount = text.split('').filter(char => /\d/.test(char)).length;
        return numberCount >= minNumbers;
    }
    defaultMessage(args) {
        const [minNumbers] = args.constraints;
        return `Deve conter no ${minNumbers} números(s)`;
    }
};
exports.ContainsNumberConstraint = ContainsNumberConstraint;
exports.ContainsNumberConstraint = ContainsNumberConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], ContainsNumberConstraint);
function ContainsNumber(minNumbers, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [minNumbers],
            validator: ContainsNumberConstraint,
        });
    };
}
exports.ContainsNumber = ContainsNumber;
//# sourceMappingURL=number.decorator.js.map