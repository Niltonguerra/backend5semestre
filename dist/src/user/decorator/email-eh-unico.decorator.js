"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEhUnico = exports.EmailEhUnicoValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const user_service_1 = require("../services/user.service");
let EmailEhUnicoValidator = class EmailEhUnicoValidator {
    constructor(service) {
        this.service = service;
        console.log("contructor propriedade:" + service);
    }
    async validate(email, args) {
        const usuarioComEmailExiste = await this.service.findByField('email', email);
        console.log(usuarioComEmailExiste);
        return !usuarioComEmailExiste;
    }
    defaultMessage(args) {
        return 'O email informado já está cadastrado';
    }
};
exports.EmailEhUnicoValidator = EmailEhUnicoValidator;
exports.EmailEhUnicoValidator = EmailEhUnicoValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], EmailEhUnicoValidator);
function EmailEhUnico(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: EmailEhUnicoValidator,
        });
    };
}
exports.EmailEhUnico = EmailEhUnico;
//# sourceMappingURL=email-eh-unico.decorator.js.map