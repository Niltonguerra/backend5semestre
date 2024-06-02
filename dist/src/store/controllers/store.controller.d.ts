/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { StoreService } from '../services/store.service';
import { Store } from '../entities/store.entity';
import { CriaStoreDTO } from '../dtos/CriarStore.dto';
export declare class StoreController {
    private readonly service;
    constructor(service: StoreService);
    findById(id: string): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Store> & Store & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    findAll(): Promise<Store[]>;
    create(store: CriaStoreDTO): Promise<{
        message: string;
        usuario: any;
        Store?: undefined;
    } | {
        Store: import("mongoose").Document<unknown, {}, Store> & Store & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
        usuario?: undefined;
    }>;
    update(store: Store, id: string): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Store> & Store & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    remove(id: string): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Store> & Store & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
}
