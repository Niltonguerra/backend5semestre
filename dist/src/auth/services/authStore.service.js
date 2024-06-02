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
exports.AuthStoreService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const store_service_1 = require("../../store/services/store.service");
let AuthStoreService = class AuthStoreService {
    constructor(storeService, jwtService) {
        this.storeService = storeService;
        this.jwtService = jwtService;
    }
    async validateLoginStore(dadosLogin) {
        const store = await this.storeService.findByEmail(dadosLogin.email);
        if (store === null) {
            return "Usuário não encontrado";
        }
        const isMatch = await this.validatePassword(dadosLogin.senha, store.senha);
        if (!isMatch) {
            return "Senha inválida";
        }
        return this.geraToken(store);
    }
    async geraToken(user) {
        const payload = { email: user.email, senha: user.senha };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async validatePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
};
exports.AuthStoreService = AuthStoreService;
exports.AuthStoreService = AuthStoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [store_service_1.StoreService,
        jwt_1.JwtService])
], AuthStoreService);
//# sourceMappingURL=authStore.service.js.map