import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Menu {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
