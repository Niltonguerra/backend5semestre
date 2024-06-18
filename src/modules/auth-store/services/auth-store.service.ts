
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthStoreDTO, LoginStoreInternoDTO } from '../dtos/AuthStore.dto';
import { StoreService } from 'src/modules/store/services/store.service';





@Injectable()
export class StoreAuthService {
  constructor(
    private readonly storeService: StoreService,
    private readonly jwtService: JwtService,
  ) {}


  async storeAuthentication(authUserDTO: AuthStoreDTO): Promise<{} | null> {
    const {email, senha} = authUserDTO;

    const validatedUser:LoginStoreInternoDTO = await this.validateStore(email, senha);

    if (!validatedUser) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return {
      token: (await this.geraToken(validatedUser)).toString()
    }
  }


  private async validateStore(email: string, senha: string): Promise<LoginStoreInternoDTO> {
    const user:LoginStoreInternoDTO = await this.storeService.findByEmail(email);

    if (user === null) {
      return null;
    }

    const isMatch = await this.validatePassword(senha, user.senha);

    if (!isMatch) {
      return null;
    }

    return user;
  }

  private async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  private async geraToken(user: LoginStoreInternoDTO ):Promise<string> {
    const payload = { email: user.email, id: user._id };

    return this.jwtService.sign(payload)

  }

}
