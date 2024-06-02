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
exports.CriaUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const telefone_brasil_decorator_1 = require("../decorator/telefone-brasil.decorator");
const upper_case_decorator_1 = require("../decorator/upper-case.decorator");
const lower_case_decorator_1 = require("../decorator/lower-case.decorator");
const number_decorator_1 = require("../decorator/number.decorator");
const Date_decorator_1 = require("../decorator/Date.decorator");
class CriaUsuarioDTO {
}
exports.CriaUsuarioDTO = CriaUsuarioDTO;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O email informado é inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O email não pode ser vazio' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, lower_case_decorator_1.ContainsLowercase)(2, { message: 'A senha deve ter 2 letras minúsculas no mínimo' }),
    (0, upper_case_decorator_1.ContainsUppercase)(2, { message: 'A senha deve ter 2 letras maiúsculas no mínimo' }),
    (0, class_validator_1.IsString)({ message: 'A senha deve ser uma string' }),
    (0, class_validator_1.MinLength)(8, { message: 'A senha precisa ter pelo menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(16, { message: 'A senha precisa ter no máximo 16 caracteres' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha não pode ser vazio' }),
    (0, number_decorator_1.ContainsNumber)(2, { message: 'A senha precisa ter pelo menos 2 números' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "senha", void 0);
__decorate([
    (0, telefone_brasil_decorator_1.IsTelefone)({ message: 'O telefone informado é inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O telefone não pode ser vazio' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(40, { message: 'seu nome é muito grande, deve ter no máximo 70 caracteres' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({}, { message: 'A foto deve ser uma URL válida' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "foto", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A data de nascimento não pode ser vazio' }),
    (0, Date_decorator_1.IsDateFormat)(),
    __metadata("design:type", Date)
], CriaUsuarioDTO.prototype, "data_nasc", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O endereço não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'o Endereço deve ser uma string' }),
    __metadata("design:type", Array)
], CriaUsuarioDTO.prototype, "endereco", void 0);
//# sourceMappingURL=CriaUsuario.dto.js.map