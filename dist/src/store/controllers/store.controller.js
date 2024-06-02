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
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("../services/store.service");
const store_entity_1 = require("../entities/store.entity");
const passwordEncryption_pipe_1 = require("../pipes/passwordEncryption.pipe");
const CriarStore_dto_1 = require("../dtos/CriarStore.dto");
let StoreController = class StoreController {
    constructor(service) {
        this.service = service;
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
    async create(store) {
        const verificaEmail = await this.service.findByField('email', store.email);
        if (verificaEmail.length > 0) {
            return {
                message: 'E-mail já cadastrado',
                usuario: null,
            };
        }
        const verificaCNPJ = await this.service.findByField('CNPJ', store.CNPJ);
        if (verificaCNPJ.length > 0) {
            return {
                message: 'CPNJ já cadastrado',
                usuario: null,
            };
        }
        const newStore = {
            ...store,
            confirmacao: false,
            store_ativo: true,
            criado_em: new Date(),
            atualizado_em: new Date(),
        };
        const retorno = await this.service.create(newStore);
        return {
            Store: retorno,
            message: 'criado com sucesso',
        };
    }
    async update(store, id) {
        const retorno = await this.service.update(store, id);
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
exports.StoreController = StoreController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe(), passwordEncryption_pipe_1.HashPasswordPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriarStore_dto_1.CriaStoreDTO]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_entity_1.Store, String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "remove", null);
exports.StoreController = StoreController = __decorate([
    (0, common_1.Controller)('store'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
//# sourceMappingURL=store.controller.js.map