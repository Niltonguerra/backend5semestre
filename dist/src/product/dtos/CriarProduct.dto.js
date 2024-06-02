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
exports.CriaProductDTO = void 0;
const class_validator_1 = require("class-validator");
class CriaProductDTO {
}
exports.CriaProductDTO = CriaProductDTO;
__decorate([
    (0, class_validator_1.MaxLength)(40, { message: 'seu nome é muito grande, deve ter no máximo 70 caracteres' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string' }),
    __metadata("design:type", String)
], CriaProductDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O preço não pode ser vazio' }),
    (0, class_validator_1.IsUrl)({}, { message: 'A foto deve ser uma URL válida' }),
    __metadata("design:type", String)
], CriaProductDTO.prototype, "foto", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O preço não pode ser vazio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'O preço deve ser um número' }),
    __metadata("design:type", Number)
], CriaProductDTO.prototype, "preco", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A descrição não pode ser vazia' }),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string' }),
    __metadata("design:type", String)
], CriaProductDTO.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A quantidade não pode ser vazia' }),
    (0, class_validator_1.IsNumber)({}, { message: 'A quantidade deve ser um número' }),
    __metadata("design:type", Number)
], CriaProductDTO.prototype, "quantidade", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A loja não pode ser vazia, o produto deve estar relacionado a alguma loja' }),
    (0, class_validator_1.IsString)({ message: 'A loja deve ser uma string' }),
    __metadata("design:type", String)
], CriaProductDTO.prototype, "store_id", void 0);
//# sourceMappingURL=CriarProduct.dto.js.map