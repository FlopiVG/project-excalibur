import { Schema } from 'mongoose';

export interface JwtPayload {
  readonly username: string;
  readonly _id: Schema.Types.ObjectId;
}
