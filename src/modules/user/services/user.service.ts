import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { ListaUsuarioDTO, ListaUsuarioRetorno } from '../dtos/ListaUsuario.dto';
import { CriaUsuarioDTO } from '../dtos/CriaUsuario.dto';
import { LoginUsuarioInternoDTO } from 'src/modules/auth-user/dtos/AuthUser.dto';
import { AtualizaUsuarioDTO } from '../dtos/AtualizaUsuario.dto';

@Injectable()
export class UserService {
  
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


  async findByField(campo: string, valor: string, limit?: number):Promise<ListaUsuarioDTO[]> {
    try{
      let query = {};

      query[campo] = valor;

      let searchQuery = this.userModel.find(query);

      if (limit) {
        searchQuery = searchQuery.limit(limit);
      }

      const data: User[] | null = await searchQuery.exec();

      if(!data) {
        throw new Error('Erro ao buscar o usuário pelo campo informado');
      }

      const retorno: ListaUsuarioDTO[] = data.map((user: ListaUsuarioDTO) => {
        return {
          nome: user.nome,
          email: user.email,
          telefone: user.telefone,
          foto: user.foto,
          data_nasc: user.data_nasc,
          tags: user.tags,
          historico: user.historico,
          endereco: user.endereco,
        };
      });

      return retorno;
    } catch (error) {
      console.error('erro ao tentar encontrar todos os usuários no service:', error);
      throw new Error('Erro ao buscar todos os usuários no service');
    }
  }






// rota para uso interno não espola a o usuário!!!
  async findByEmail(valor: string): Promise<LoginUsuarioInternoDTO | null> {
    try {
      // Pesquisa pelo email no modelo Mongoose
      const pesquisa: User | null = await this.userModel.findOne({ email: valor }).exec();

      // Verifica se nenhum usuário foi encontrado
      if (!pesquisa) {
        console.error('Usuário não encontrado para o email informado:', valor);
        throw new Error('email incorreto!!!');
      }

      const retorno:LoginUsuarioInternoDTO = {
        _id: pesquisa._id.toString(),
        senha: pesquisa.senha,
        nome: pesquisa.nome,
        email: pesquisa.email
      }

      return retorno; // Retorna o usuário encontrado
    } catch (error) {
      console.error('Erro ao tentar encontrar usuário pelo email:', error);
      throw new Error('Erro ao tentar encontrar usuário pelo email');
    }
  }




  async create(user: Partial<User>):Promise<ListaUsuarioRetorno> {
  try{

    const newUser:User = {
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      telefone: user.telefone,
      foto: user.foto,
      data_nasc: user.data_nasc,
      tags: user.tags,
      endereco: user.endereco,
      usuario_ativo: true,
      tipo_de_conta: 'usuario',
      confirmado: false,
      historico: [],
      criado_em: new Date(),
      atualizado_em: new Date(),
    };

    const data: User | null = await new this.userModel(newUser).save();

    if (!data) {
      console.error('erro ao cadastrar o usuário no service');
      throw new Error('Erro ao cadastrar o usuário, por favor tente mais tarde');
    }

    const retorno:ListaUsuarioRetorno = {
      nome: data.nome,
      email: data.email,
    };

    return retorno;
    } catch (error) {
      console.error('erro cadastrar um novo usuário, erro:', error);
      throw new Error('erro cadastrar um novo usuário');
    }
  }



  async findAll(): Promise<ListaUsuarioDTO[]> {
    try {
      const data: User[] | null = await this.userModel.find().exec();
  
      if(!data) {
        console.log('Erro ao buscar todos os usuários no banco de dados')
        throw new Error('Erro ao buscar todos os usuários');
      }

      const retorno: ListaUsuarioDTO[] = data.map((user: ListaUsuarioDTO) => {
        return {
          nome: user.nome,
          email: user.email,
          telefone: user.telefone,
          foto: user.foto,
          data_nasc: user.data_nasc,
          tags: user.tags,
          historico: user.historico,
          endereco: user.endereco,
        };
      });


      return retorno;

    } catch (error) {
      // Log de erro opcional
      console.error('erro ao tentar encontrar todos os usuários no service:', error);
      throw new Error('Erro ao buscar todos os usuários no service');
    }
  }
  




  async findById(id: string):  Promise <ListaUsuarioDTO | null> {
    try {
      const user: User | null = await this.userModel.findById(id).exec();
      
      if (!user) {
        throw new Error('Erro, não foi possivel encontrar o usuário pelo id informado');
      }

      const retorno:ListaUsuarioDTO = {
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        foto: user.foto,
        data_nasc: user.data_nasc,
        tags: user.tags,
        historico: user.historico,
        endereco: user.endereco,
      }

      return retorno;

    } catch (error) {
      // Log de erro opcional
      console.error('Error finding user by ID:', error);
      throw new Error('Failed to find user by ID');
    }
  }




  async update(user:AtualizaUsuarioDTO, id: string): Promise<ListaUsuarioRetorno> {
    try {
      const updatedUser: User | null = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
      
      if (!updatedUser) {
        throw new NotFoundException('Usuario não encontrado para realizar a atualização');
      }

      const retorno: ListaUsuarioRetorno = {
        nome: updatedUser.nome,
        email: updatedUser.email,
      };

      return retorno;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error na atualização do usuário');
    }
  }


  async disable( id: string): Promise<any> {
    try {

      const user: Partial<User> = {
        usuario_ativo: false,
      };

      const disableUser: User | null = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();

      if (!disableUser) {
        throw new NotFoundException('Usuario não encontrado para realizar a desativação');
      }

      const retorno: ListaUsuarioRetorno = {
        nome: disableUser.nome,
        email: disableUser.email,
      };
      
      return retorno;

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error na desativação do usuário');
    }
  }

  // async remove(id: string){
  //   try{
  //     const deletedUser: User | null = await this.userModel.findByIdAndDelete(id).exec();

  //     if (!deletedUser) {
  //       throw new NotFoundException('Usuario não encontrado para realizar a exclução');
  //     }


  //     const retorno: ListaUsuarioRetorno = {
  //       nome: deletedUser.nome,
  //       email: deletedUser.email,
  //     };

  //     return retorno;
  //     } catch (error) {
  //       if (error instanceof NotFoundException) {
  //         throw error;
  //       }
  //       throw new InternalServerErrorException('Error na exclução do usuário');
  //   }
  // }

}

