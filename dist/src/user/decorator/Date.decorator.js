"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateFormat = void 0;
const class_validator_1 = require("class-validator");
function isValidDateFormat(value) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(value);
}
function IsDateFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isDateFormat',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return isValidDateFormat(value);
                },
                defaultMessage(args) {
                    return `${args.property} must be in the format dd/mm/yyyy`;
                }
            }
        });
    };
}
exports.IsDateFormat = IsDateFormat;
//# sourceMappingURL=Date.decorator.js.map