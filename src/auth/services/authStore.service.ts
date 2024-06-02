
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { UserService } from 'src/user/services/user.service';
import { StoreService } from 'src/store/services/store.service';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';



@Injectable()
export class AuthStoreService {
  constructor(
    private readonly storeService: StoreService,
    private readonly jwtService: JwtService,
  ) {}



  async validateLoginStore(dadosLogin:AuthStoreDTO): Promise<any> {

    const store = await this.storeService.findByEmail(dadosLogin.email);

    if (store === null) {
      return "Usuário não encontrado";
    }

    const isMatch = await this.validatePassword(dadosLogin.senha, store.senha);

      if (!isMatch) {
        return "Senha inválida";
      }


      return this.geraToken(store);
  }



  private async geraToken(user: AuthUserDTO ) {
    const payload = { email: user.email, senha: user.senha };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  private async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    // Implemente a lógica para validar a senha aqui (por exemplo, usando bcrypt)
    return bcrypt.compare(password, hashedPassword);
  }

}


