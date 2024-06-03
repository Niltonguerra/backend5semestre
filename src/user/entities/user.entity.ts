import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class User {


  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  senha: string;

  @Prop({ type: String })
  telefone: string;

  @Prop({ type: String })
  nome: string;

  @Prop({ type: String })
  foto: string;

  @Prop({ type: Date })
  data_nasc: Date;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: [String] })
  historico: string[];

  @Prop({ type: [String] })
  endereco: string[];

  @Prop({ type: Boolean })
  confirmado: boolean;

  @Prop({ type: Boolean })
  usuario_ativo: boolean;


  @Prop({ type:Date, required: false })
  criado_em: Date;

  @Prop({ type:Date, required: false })
  atualizado_em: Date;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
