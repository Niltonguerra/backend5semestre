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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("../../user/services/user.service");
const store_service_1 = require("../../store/services/store.service");
let AuthService = class AuthService {
    constructor(userService, storeService, jwtService) {
        this.userService = userService;
        this.storeService = storeService;
        this.jwtService = jwtService;
    }
    async validateLoginUser(dadosLogin) {
        const user = await this.userService.findByEmail(dadosLogin.email);
        if (user === null) {
            return "Usuário não encontrado";
        }
        const isMatch = await this.validatePassword(dadosLogin.senha, user.senha);
        if (!isMatch) {
            return "Senha inválida";
        }
        return this.geraToken(user);
    }
    async validateLoginStore(dadosLogin) {
        const store = await this.storeService.findByCNPJ(dadosLogin.CNPJ);
        if (store === null) {
            return "Usuário não encontrado";
        }
        const isMatch = await this.validatePassword(dadosLogin.senha, store.senha);
        if (!isMatch) {
            return "Senha inválida";
        }
        return "this.geraToken(store)";
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
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        store_service_1.StoreService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map