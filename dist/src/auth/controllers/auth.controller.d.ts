import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';
import { AuthUserService } from '../services/authUser.service';
import { AuthStoreService } from '../services/authStore.service';
export declare class AuthController {
    private readonly AuthUserservice;
    private readonly AuthStoreservice;
    constructor(AuthUserservice: AuthUserService, AuthStoreservice: AuthStoreService);
    validateLoginUser(validateLoginDTO: AuthUserDTO): Promise<any>;
    validateLoginStore(validateLoginDTO: AuthStoreDTO): Promise<any>;
}
