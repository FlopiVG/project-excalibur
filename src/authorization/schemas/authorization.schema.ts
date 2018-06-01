import { Schema } from 'mongoose';

const PermissionSchema = new Schema({
  module: {
    type: String,
    unique: true,
    required: true,
  },
  write: {
    type: Boolean,
    default: false,
  },
  read: {
    type: Boolean,
    default: false,
  },
  edit: {
    type: Boolean,
    default: false,
  },
  delete: {
    type: Boolean,
    default: false,
  },
});

export const AuthorizationSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    unique: true,
  },
  permissions: [PermissionSchema],
});
