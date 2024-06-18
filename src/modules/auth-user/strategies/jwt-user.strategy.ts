import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyUser extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'FomeFacil', // Use a mesma chave secreta definida no módulo de autenticação
    });
  }

  async validate(payload: any) {
    return { userId: payload.id, email: payload.email };
  }
}
