
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthUserDTO, LoginUsuarioInternoDTO } from '../dtos/AuthUser.dto';
import { UserService } from 'src/modules/user/services/user.service';





@Injectable()
export class AuthUserService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}


  async UserAuthentication(authUserDTO: AuthUserDTO): Promise<{} | null> {
    const {email, senha} = authUserDTO;

    const validatedUser:LoginUsuarioInternoDTO = await this.validateUser(email, senha);

    if (!validatedUser) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return {
      token: (await this.geraToken(validatedUser)).toString()
    }
  }


  private async validateUser(email: string, senha: string): Promise<LoginUsuarioInternoDTO> {
    const user:LoginUsuarioInternoDTO = await this.userService.findByEmail(email);

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

  private async geraToken(user: LoginUsuarioInternoDTO ):Promise<string> {
    const payload = { email: user.email, id: user._id };

    return this.jwtService.sign(payload)

  }

}
