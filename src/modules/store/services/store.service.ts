import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from '../entities/store.entity';
import { Model } from 'mongoose';
import { ListaStoreDTO, ListaStoreRetorno } from '../dtos/listaStore.dto';
import { LoginStoreInternoDTO } from 'src/modules/auth-store/dtos/AuthStore.dto';
import { AtualizaStoreDTO } from '../dtos/AtualizarStore.dto';

@Injectable()
export class StoreService {
  constructor(@InjectModel('Store') private readonly storeModel: Model<Store>) {}

  async create(doc: any) {
    const result = await new this.storeModel(doc).save();
    return result;
  }



  async findByName (nome: string): Promise<string> {
    try {
      const result:Store = await this.storeModel.findOne({ nome: nome }).exec();

      if (!result) {
        console.log('Erro, não foi possivel encontrar a loja pelo nome informado');
      }

      return result._id.toString();

      } catch (error) {
        // Log de erro opcional
        console.error('erro ao tentar encontrar a loja pelo nome:', error);

    }
  }




  async findAll(): Promise<ListaStoreDTO[]> {
    try {
      const data: Store[] | null = await this.storeModel.find().exec()

      if(!data) {
        console.log('Erro ao buscar todas as lojas no banco de dados')
        throw new Error('Erro ao buscar todas as lojas');
      }

      const retorno: ListaStoreDTO[] = data.map(item => ({
        _id: item._id.toString(),
        nome: item.nome,
        email: item.email,
        CNPJ: item.CNPJ, 
        descricao: item.descricao, 
        foto: item.foto, 
        hor_abertura: item.hor_abertura, 
        hor_encerramento: item.hor_encerramento, 
        telefone: item.telefone, 
        endereco: item.endereco, 
        product_id : item.product_id ? item.product_id.toString() : 'não tem produtos relacionados a essa loja',
      }));

      return retorno;
      } catch (error) {
        // Log de erro opcional
        console.error('erro ao tentar encontrar todas as lojas no service:', error);
        throw new Error('Erro ao buscar todas as lojas no service');
    }
  }

  async findById(id: string):  Promise <ListaStoreDTO | null> {
    try {
      const store: Store | null = await this.storeModel.findById(id).exec();
      
      if (!store) {
        throw new Error('Erro, não foi possivel encontrar a empresa pelo id informado');
      }

      const retorno:ListaStoreDTO = {
        nome: store.nome,
        email: store.email,
        telefone: store.telefone,
        foto: store.foto,
        hor_abertura: store.hor_abertura,
        hor_encerramento: store.hor_encerramento,
        endereco: store.endereco,
        CNPJ: store.CNPJ,
        descricao: store.descricao,
      }

      return retorno;

    } catch (error) {
      // Log de erro opcional
      console.error('Error finding store by ID:', error);
      throw new Error('Failed to find store by ID');
    }
  }

// rota para uso interno não espola a o empresa!!!
async findByEmail(valor: string): Promise<LoginStoreInternoDTO | null> {
  try {
    // Pesquisa pelo email no modelo Mongoose
    const pesquisa: Store | null = await this.storeModel.findOne({ email: valor }).exec();

    // Verifica se nenhum empresa foi encontrado
    if (!pesquisa) {
      console.error('Empresa não encontrado para o email informado:', valor);
      throw new Error('email incorreto!!!');
    }

    const retorno:LoginStoreInternoDTO = {
      _id: pesquisa._id.toString(),
      senha: pesquisa.senha,
      nome: pesquisa.nome,
      email: pesquisa.email
    }

    return retorno; // Retorna o empresa encontrado
  } catch (error) {
    console.error('Erro ao tentar encontrar empresa pelo email:', error);
    throw new Error('Erro ao tentar encontrar empresa pelo email');
  }
}


  async findByField(campo: string, valor: string, limit?: number):Promise<ListaStoreDTO[]> {
    try{
      let query = {};

      query[campo] = valor;

      let searchQuery = this.storeModel.find(query);

      if (limit) {
        searchQuery = searchQuery.limit(limit);
      }

      const data: Store[] | null = await searchQuery.exec();

      if(!data) {
        throw new Error('Erro ao buscar a loja pelo campo informado');
      }

      const retorno: ListaStoreDTO[] = data.map((loja: ListaStoreDTO) => {
        return {
          nome: loja.nome,
          email: loja.email,
          telefone: loja.telefone,
          foto: loja.foto,
          hor_abertura: loja.hor_abertura,
          hor_encerramento: loja.hor_encerramento,
          endereco: loja.endereco,
          CNPJ: loja.CNPJ,
          descricao: loja.descricao,
        };
      });

      return retorno;
    } catch (error) {
      console.error('erro ao tentar encontrar todos as lojas no service:', error);
      throw new Error('Erro ao buscar todas as lojas no service');
    }
  }







  async update(store: AtualizaStoreDTO, id: string) {
    try {
      const updatedStore = await this.storeModel
      .findByIdAndUpdate(id, store, { new: true })
      .exec();


      if (!updatedStore) {
        throw new NotFoundException('Usuario não encontrado para realizar a atualização');
      }

      const retorno: ListaStoreRetorno = {
        nome: updatedStore.nome,
        email: updatedStore.email,
      };

      return retorno;

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error na atualização do usuário');
    }
  }


  async updateProductIdForStore(ProductID: string, StoreID: string) {
    
    const store: Store | null = await this.storeModel.findById(StoreID).exec();
      
    if (!store) {
      throw new Error('Erro, não foi possivel encontrar a empresa pelo id informado');
    }

  
    let StoreIDNovo: string[];
  
    // Verifica se o campo product_id existe no documento da loja
    if (store.product_id && Array.isArray(store.product_id)) {
      StoreIDNovo = [...store.product_id];
    } else {
      StoreIDNovo = [];
    }
  
    // Verifica se o novo StoreID já existe no array
    if (!StoreIDNovo.includes(ProductID)) {
      // Adiciona o novo ID de produto ao array
      StoreIDNovo.push(ProductID);
    }
  
    const updatedStore = await this.storeModel
      .findByIdAndUpdate(StoreID, { product_id: StoreIDNovo }, { new: true })
      .exec();

    return updatedStore;
  }


  async disable( id: string): Promise<any> {
    try {

      const user: Partial<Store> = {
        store_ativo: false,
      };

      const disableUser: Store | null = await this.storeModel.findByIdAndUpdate(id, user, { new: true }).exec();

      if (!disableUser) {
        throw new NotFoundException('Loja não encontrado para realizar a desativação');
      }

      const retorno: ListaStoreRetorno = {
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

  // async remove(id: string) {
  //   const deletedStore = await this.storeModel.findByIdAndDelete(id).exec();
  //   return deletedStore;
  // }
}
