import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

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

UsersSchema.pre('save', function(next: Function): void {
  if (!this.isModified('password')) return next();

  return bcrypt
    .genSalt(SALT_WORK_FACTOR)
    .then(salt => bcrypt.hash(this.password, salt))
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(next);
});

UsersSchema.methods.comparePassword = function(
  candidatePassword: string,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(candidatePassword, this.password)
      .then(resolve)
      .catch(reject);
  });
};
