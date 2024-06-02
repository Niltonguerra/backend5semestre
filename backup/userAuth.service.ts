
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { User } from '../entities/user.entity';
// import { Model } from 'mongoose';
// import { LoginDTO } from '../dtos/Login.dto';
// import * as bcrypt from 'bcrypt';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class UserAuthService {
  
//   constructor(
//     @InjectModel('User') private readonly userModel: Model<User>,
//     private readonly jwtService: JwtService,
//   ) {}


//   async validateLogin(validateLoginDTO: LoginDTO) {
//     const { email, senha } = validateLoginDTO;

//     // Valide o e-mail
//     const user = await this.userModel.findOne({ email }).exec();

//     if (!user) {
//       return { message: 'usuário não encontrado.' };
//     }

//     // Valide a senha
//     const isPasswordValid = await this.validatePassword(senha, user.senha);
//     if (!isPasswordValid) {
//       return { message: 'Senha inválida' };
//     }

//     // Gere um token de autenticação válido
//     const token = this.jwtService.sign({ email: user.email });

//     return { token };
//   }


  
//   private async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
//     // Implemente a lógica para validar a senha aqui (por exemplo, usando bcrypt)
//     return bcrypt.compare(password, hashedPassword);
//   }



// }
