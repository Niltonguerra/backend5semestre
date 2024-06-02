"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTime = void 0;
const class_validator_1 = require("class-validator");
function IsTime(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isTime',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (typeof value !== 'string') {
                        return false;
                    }
                    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
                    return timeRegex.test(value);
                },
                defaultMessage(args) {
                    return `${args.property} must be a valid time in the format HH:mm`;
                },
            },
        });
    };
}
exports.IsTime = IsTime;
//# sourceMappingURL=Hora.decorator.js.map