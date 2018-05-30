import { Document, Types } from 'mongoose';

export interface Users extends Document {
  readonly _id: Types.ObjectId;
  readonly username: string;
  readonly password: string;
  readonly email: string;
  comparePassword(password: string): Promise<boolean>;
}
