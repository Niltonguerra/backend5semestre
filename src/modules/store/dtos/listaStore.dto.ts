import { Types } from "mongoose";

export class ListaStoreDTO {
  nome: string;
  CNPJ: string;
  email: string;
  descricao: string;
  foto: string;
  hor_abertura: string;
  hor_encerramento: string;
  telefone: string;
  endereco: string;
}

export class ListaStoreRetorno {
  nome: string;
  email: string;
}
