"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./controllers/auth.controller");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/services/user.service");
const store_service_1 = require("../store/services/store.service");
const store_entity_1 = require("../store/entities/store.entity");
const authUser_service_1 = require("./services/authUser.service");
const authStore_service_1 = require("./services/authStore.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_entity_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Store', schema: store_entity_1.StoreSchema }]),
            jwt_1.JwtModule.register({
                secret: 'NiltonEMuitoLindo',
                signOptions: { expiresIn: '15m' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            authUser_service_1.AuthUserService,
            authStore_service_1.AuthStoreService,
            store_service_1.StoreService,
            user_service_1.UserService,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map