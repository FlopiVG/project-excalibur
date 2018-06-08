import { Schema, Document } from 'mongoose';

export interface Heroes extends Document {
  readonly name: String;
  readonly str: Number;
  readonly dex: Number;
  readonly int: Number;
  readonly user_id: Schema.Types.ObjectId;
}
