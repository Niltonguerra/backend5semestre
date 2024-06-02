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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StoreService = class StoreService {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }
    async create(doc) {
        const result = await new this.storeModel(doc).save();
        return result;
    }
    async findAll() {
        return this.storeModel.find().exec();
    }
    async findById(id) {
        const result = await this.storeModel.findById(id).exec();
        return result;
    }
    async findByEmail(valor) {
        const pesquisa = await this.storeModel.findOne({ email: valor }).exec();
        if (!pesquisa) {
            return null;
        }
        const result = {
            email: pesquisa.email,
            senha: pesquisa.senha,
        };
        return result;
    }
    async findByField(campo, valor, limit) {
        let query = {};
        query[campo] = valor;
        let searchQuery = this.storeModel.find(query);
        if (limit) {
            searchQuery = searchQuery.limit(limit);
        }
        const result = await searchQuery.exec();
        return result;
    }
    async update(store, id) {
        const updatedStore = await this.storeModel
            .findByIdAndUpdate(id, store, { new: true })
            .exec();
        return updatedStore;
    }
    async remove(id) {
        const deletedStore = await this.storeModel.findByIdAndDelete(id).exec();
        return deletedStore;
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Store')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StoreService);
//# sourceMappingURL=store.service.js.map