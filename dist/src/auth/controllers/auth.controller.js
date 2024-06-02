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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const AuthUser_dto_1 = require("../dtos/AuthUser.dto");
const AuthStore_dto_1 = require("../dtos/AuthStore.dto");
const authUser_service_1 = require("../services/authUser.service");
const authStore_service_1 = require("../services/authStore.service");
let AuthController = class AuthController {
    constructor(AuthUserservice, AuthStoreservice) {
        this.AuthUserservice = AuthUserservice;
        this.AuthStoreservice = AuthStoreservice;
    }
    async validateLoginUser(validateLoginDTO) {
        return this.AuthUserservice.validateLoginUser(validateLoginDTO);
    }
    async validateLoginStore(validateLoginDTO) {
        return this.AuthStoreservice.validateLoginStore(validateLoginDTO);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthUser_dto_1.AuthUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateLoginUser", null);
__decorate([
    (0, common_1.Post)('store'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthStore_dto_1.AuthStoreDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateLoginStore", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [authUser_service_1.AuthUserService,
        authStore_service_1.AuthStoreService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map