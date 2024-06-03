import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Product } from 'src/product/entities/product.entity';





export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {

  @Prop({ type: String })
  nome: string;

  @Prop({ type: String })
  CNPJ: string;

  @Prop({ type: String })
  senha: string;


  @Prop({ type: String })
  descricao: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  foto: string;

  @Prop({ type: String })
  hor_abertura: string;

  @Prop({ type: String })
  hor_encerramento: string;

  @Prop({ type: String })
  telefone: string;


  @Prop({ type: String })
  endereco: string;



  @Prop({ type: Boolean })
  confirmacao: boolean;

  @Prop({ type: Boolean })
  store_ativo: boolean;

  @Prop({ type:Date, required: false })
  criado_em: Date;

  @Prop({ type:Date, required: false })
  atualizado_em: Date;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Product', required: false})
  product_id?: string[];
}

export const StoreSchema = SchemaFactory.createForClass(Store);
