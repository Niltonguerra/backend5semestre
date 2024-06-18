export class ListaUsuarioDTO {
  nome: string;
  email: string;
  telefone: string;
  foto: string;
  data_nasc: Date;
  tags: string[];
  historico: string[];
  endereco: string[];
}

export class ListaUsuarioCompletoDTO {
  _id:string;
  senha:string;
  nome: string;
  email: string;
  telefone: string;
  foto: string;
  data_nasc: Date;
  tags: string[];
  tipo_de_conta: string;
  historico: string[];
  endereco: string[];
}



export class ListaUsuarioRetorno {
  nome: string;
  email: string;
}
