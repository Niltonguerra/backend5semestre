import { JwtService } from '@nestjs/jwt';
import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { UserService } from 'src/user/services/user.service';
import { StoreService } from 'src/store/services/store.service';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';
export declare class AuthService {
    private readonly userService;
    private readonly storeService;
    private readonly jwtService;
    constructor(userService: UserService, storeService: StoreService, jwtService: JwtService);
    validateLoginUser(dadosLogin: AuthUserDTO): Promise<any>;
    validateLoginStore(dadosLogin: AuthStoreDTO): Promise<any>;
    private geraToken;
    private validatePassword;
}
