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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findByField(campo, valor, limit) {
        let query = {};
        query[campo] = valor;
        let searchQuery = this.userModel.find(query);
        if (limit) {
            searchQuery = searchQuery.limit(limit);
        }
        const result = await searchQuery.exec();
        return result;
    }
    async findByEmail(valor) {
        const pesquisa = await this.userModel.findOne({ email: valor }).exec();
        if (!pesquisa) {
            return null;
        }
        const result = {
            email: pesquisa.email,
            senha: pesquisa.senha,
        };
        return result;
    }
    async create(doc) {
        const data = await new this.userModel(doc).save();
        const retorno = {
            _id: data._id.toString(),
            nome: data.nome,
            email: data.email,
        };
        return retorno;
    }
    async findAll() {
        const data = await this.userModel.find().exec();
        const retorno = data.map(user => ({
            _id: user._id.toString(),
            nome: user.nome,
            email: user.email,
        }));
        return retorno;
    }
    async findById(id) {
        const result = await this.userModel.findById(id).exec();
        return result;
    }
    async update(user, id) {
        const updatedUser = await this.userModel
            .findByIdAndUpdate(id, user, { new: true })
            .exec();
        const retorno = {
            _id: updatedUser._id.toString(),
            nome: updatedUser.nome,
            email: updatedUser.email,
        };
        return retorno;
    }
    async remove(id) {
        const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
        return deletedUser;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map