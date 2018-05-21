import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => /\S+@\S+\.\S+/.test(v),
      message: '{VALUE} is not a valid email.',
    },
  },
});
