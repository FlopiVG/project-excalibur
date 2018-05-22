import { Schema } from 'mongoose';

export interface Heroes {
  readonly name: String;
  readonly str: Number;
  readonly dex: Number;
  readonly int: Number;
  readonly user_id: Schema.Types.ObjectId;
}