import { ListaProductDTO } from "./listaProduct.dto";

export class ListaProductForStoreDTO {
  storeId: string;
  storeName: string;
  products: ListaProductDTO[];
}