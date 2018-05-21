import { Document } from 'mongoose';

export interface News extends Document {
  readonly title: String;
  readonly text: String;
}
