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
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CriaUsuarioDTO } from '../dtos/CriaUsuario.dto';
import { ListaUsuarioDTO } from '../dtos/ListaUsuario.dto';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    findByField(campo: string, valor: string, limit: number): Promise<{
        resultado: (import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        message: string;
    }>;
    findById(id: string): Promise<{
        usuario: import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    findAll(): Promise<ListaUsuarioDTO[]>;
    create(user: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        message: string;
    }>;
    update(user: User, id: string): Promise<{
        usuario: ListaUsuarioDTO;
        message: string;
    }>;
    remove(id: string): Promise<{
        usuario: import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
}
