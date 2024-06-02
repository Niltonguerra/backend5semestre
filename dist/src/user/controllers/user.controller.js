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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const user_entity_1 = require("../entities/user.entity");
const CriaUsuario_dto_1 = require("../dtos/CriaUsuario.dto");
const passwordEncryption_pipe_1 = require("../pipes/passwordEncryption.pipe");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    async findByField(campo, valor, limit) {
        const retorno = await this.service.findByField(campo, valor, limit);
        return {
            resultado: retorno,
            message: 'Busca realizada com sucesso',
        };
    }
    async findById(id) {
        const retorno = await this.service.findById(id);
        return {
            usuario: retorno,
            message: 'encontrado com sucesso',
        };
    }
    async findAll() {
        const retorno = await this.service.findAll();
        return retorno;
    }
    async create(user) {
        const verificaEmail = await this.service.findByField('email', user.email);
        if (verificaEmail.length > 0) {
            return {
                message: 'E-mail já cadastrado',
                usuario: null,
            };
        }
        const newUser = {
            ...user,
            usuario_ativo: false,
            confirmado: false,
            tags: [],
            historico: [],
            criado_em: new Date(),
            atualizado_em: new Date(),
        };
        const retorno = await this.service.create(newUser);
        return {
            usuario: retorno,
            message: 'Criado com sucesso',
        };
    }
    async update(user, id) {
        const retorno = await this.service.update(user, id);
        return {
            usuario: retorno,
            message: 'editado com sucesso',
        };
    }
    async remove(id) {
        const retorno = await this.service.remove(id);
        return {
            usuario: retorno,
            message: 'excluido com sucesso',
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('search/:campo/:valor'),
    __param(0, (0, common_1.Param)('campo')),
    __param(1, (0, common_1.Param)('valor')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByField", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe(), passwordEncryption_pipe_1.HashPasswordPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaUsuario_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map