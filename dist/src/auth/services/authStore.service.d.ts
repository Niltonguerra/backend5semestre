import { JwtService } from '@nestjs/jwt';
import { StoreService } from 'src/store/services/store.service';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';
export declare class AuthStoreService {
    private readonly storeService;
    private readonly jwtService;
    constructor(storeService: StoreService, jwtService: JwtService);
    validateLoginStore(dadosLogin: AuthStoreDTO): Promise<any>;
    private geraToken;
    private validatePassword;
}
