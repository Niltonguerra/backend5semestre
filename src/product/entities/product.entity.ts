import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Store } from 'src/store/entities/store.entity';


export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop({ type: String })
  nome: string;

  @Prop({ type: Number })
  preco: number;

  @Prop({ type: String })
  descricao: string;

  @Prop({ type: String })
  foto: string;

  @Prop({ type: Number })
  quantidade: number;

  @Prop({ type:Date, required: false })
  Criado_em: Date;

  @Prop({ type:Date, required: false })
  atualizado_em: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Store' })
  store_id: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
