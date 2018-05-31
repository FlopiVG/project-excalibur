import { Schema } from 'mongoose';

const PermissionSchema = new Schema({
  module: String,
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

AuthorizationSchema.methods.updatePermissions = function(
  user_id,
  permissions,
  module,
) {
  const authorization = this.findOne({ user_id });
  authorization.permissions = authorization.permissions(p => {
    if (p.module === module) {
      return { ...p, ...permissions };
    } else return p;
  });

  authorization.save();
};
