const mongoose = require('mongoose');
const mockData = require('./__mocks__/users_data');
const { generateMockData } = require('../utils/mock');
const { comparePassword, generatePassword } = require('./users_utils');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
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
  villages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'villages',
    },
  ],
});

userSchema.pre('save', generatePassword);

userSchema.methods.comparePassword = comparePassword;

const usersModel = mongoose.model('users', userSchema);

generateMockData(usersModel, mockData);

module.exports = usersModel;
