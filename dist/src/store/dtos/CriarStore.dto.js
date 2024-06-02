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
exports.CriaStoreDTO = void 0;
const class_validator_1 = require("class-validator");
const telefone_brasil_decorator_1 = require("../decorator/telefone-brasil.decorator");
const upper_case_decorator_1 = require("../decorator/upper-case.decorator");
const lower_case_decorator_1 = require("../decorator/lower-case.decorator");
const number_decorator_1 = require("../decorator/number.decorator");
const CNPJ_decorator_1 = require("../decorator/CNPJ.decorator");
const Hora_decorator_1 = require("../decorator/Hora.decorator");
class CriaStoreDTO {
}
exports.CriaStoreDTO = CriaStoreDTO;
__decorate([
    (0, class_validator_1.MaxLength)(40, { message: 'seu nome é muito grande, deve ter no máximo 70 caracteres' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O CPNJ não pode ser vazio' }),
    (0, CNPJ_decorator_1.IsCNPJ)({ message: 'O CPNJ deve ser valido' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "CNPJ", void 0);
__decorate([
    (0, lower_case_decorator_1.ContainsLowercase)(2, { message: 'A senha deve ter 2 letras minúsculas no mínimo' }),
    (0, upper_case_decorator_1.ContainsUppercase)(2, { message: 'A senha deve ter 2 letras maiúsculas no mínimo' }),
    (0, class_validator_1.IsString)({ message: 'A senha deve ser uma string' }),
    (0, class_validator_1.MinLength)(8, { message: 'A senha precisa ter pelo menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(16, { message: 'A senha precisa ter no máximo 16 caracteres' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha não pode ser vazio' }),
    (0, number_decorator_1.ContainsNumber)(2, { message: 'A senha precisa ter pelo menos 2 números' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "senha", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: 'O email informado é inválido' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)({}, { message: 'A foto deve ser uma URL válida' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "foto", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, Hora_decorator_1.IsTime)({ message: 'o horário deve estar no formato HH:mm' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "hor_abertura", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, Hora_decorator_1.IsTime)({ message: 'o horário deve estar no formato HH:mm' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "hor_encerramento", void 0);
__decorate([
    (0, telefone_brasil_decorator_1.IsTelefone)({ message: 'O telefone informado é inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O telefone não pode ser vazio' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O endereço não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'o Endereço deve ser uma string' }),
    __metadata("design:type", String)
], CriaStoreDTO.prototype, "endereco", void 0);
//# sourceMappingURL=CriarStore.dto.js.map