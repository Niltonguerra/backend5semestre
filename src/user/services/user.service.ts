import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { LoginUserDTO } from '../dtos/LoginUser.dto';
import { ListaUsuarioDTO } from '../dtos/ListaUsuario.dto';

@Injectable()
export class UserService {
  
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


  async findByField(campo: string, valor: string, limit?: number) {
    let query = {};
    query[campo] = valor;

    let searchQuery = this.userModel.find(query);
    if (limit) {
      searchQuery = searchQuery.limit(limit);
    }

    const result = await searchQuery.exec();

    return result;
  }



  async findByEmail(valor: string) {


    const pesquisa = await this.userModel.findOne({ email: valor }).exec();

    if (!pesquisa) {
      return null;
    }

    const result: LoginUserDTO = {
      email: pesquisa.email,
      senha: pesquisa.senha,
    };
    
    return result;
  }



  async create(doc: User) {

    const data = await new this.userModel(doc).save();

    const retorno: ListaUsuarioDTO = {
      _id: data._id.toString(),
      nome: data.nome,
      email: data.email,
    };

    return retorno;
    
  }

  async findAll(): Promise<ListaUsuarioDTO[]> {



    
    const data = await this.userModel.find().exec();


    const retorno: ListaUsuarioDTO[] = data.map(user => ({
      _id: user._id.toString(),
      nome: user.nome,
      email: user.email,
    }));


    return retorno;
  }

  async findById(id: string) {
    const result = await this.userModel.findById(id).exec();
    return result;
  }

  async update(user: User, id: string) {

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();


    const retorno: ListaUsuarioDTO = {
      _id: updatedUser._id.toString(),
      nome: updatedUser.nome,
      email: updatedUser.email,
    };


    return retorno;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    return deletedUser;
  }




}

