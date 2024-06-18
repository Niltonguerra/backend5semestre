
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { StoreService } from 'src/modules/store/services/store.service';
// import { AuthStoreDTO } from '../../auth-store/dtos/AuthStore.dto';



// @Injectable()
// export class AuthStoreService {
//   constructor(
//     private readonly storeService: StoreService,
//     private readonly jwtService: JwtService,
//   ) {}



//   async validateLoginStore(dadosLogin:AuthStoreDTO): Promise<any> {

//     const store = await this.storeService.findByEmail(dadosLogin.email);

//     if (store === null) {
//       return "Usuário não encontrado";
//     }

//     const isMatch = await this.validatePassword(dadosLogin.senha, store.senha);

//       if (!isMatch) {
//         return "Senha inválida";
//       }


//       return this.geraToken(store);
//   }



//   private async geraToken(user: AuthStoreDTO ) {
//     const payload = { email: user.email, senha: user.senha };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }


//   private async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
//     // Implemente a lógica para validar a senha aqui (por exemplo, usando bcrypt)
//     return bcrypt.compare(password, hashedPassword);
//   }

// }


