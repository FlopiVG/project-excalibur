import { Document } from 'mongoose';

export interface Users extends Document {
  readonly username: String;
  readonly password: String;
}
