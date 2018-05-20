import { Schema } from 'mongoose';

export const HeroesSchema = new Schema({
  name: String,
  str: {
    type: Number,
    default: Math.floor(Math.random() * 20),
  },
  dex: {
    type: Number,
    default: Math.floor(Math.random() * 20),
  },
  int: {
    type: Number,
    default: Math.floor(Math.random() * 20),
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
});
