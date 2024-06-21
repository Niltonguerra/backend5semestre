export class ListaProductDTO {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  quantidade: number;
  tags: string[];
}


export class ListaProductForStoreDTO{
  storeId: string;
  storeName: string;
  products: ListaProductDTO[];
}

export class ListaProductInternoDTO {
  _id: string;
  nome: string;
  preco: number;
  descricao: string;
  foto: string;
  quantidade: number;
  tags: string[];
  criado_em: Date;
  atualizado_em: Date;
  store_id: string;
}
