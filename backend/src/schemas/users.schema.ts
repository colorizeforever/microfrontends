import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop()
  age: Date;

  @Prop()
  trips: number;

  @Prop()
  country: string;

  @Prop()
  nickname: string;

  @Prop()
  company: string;

  @Prop()
  skills: string;

  @Prop({ enum: ['Male', 'Female', 'Non-binary'] })
  gender: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
