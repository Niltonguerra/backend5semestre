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