import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class CategoryDocument {
  @Prop()
  id: string;

  @Prop()
  readonly name: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryDocument);
