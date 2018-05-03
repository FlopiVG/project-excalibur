const mongoose = require('mongoose');
const { removeMongoKeys } = require('../../utils/general');

mongoose.connect(process.env.MONGO_URI_TEST);
const User = require('../users_model');

describe('users model test', () => {
  let input;
  beforeAll(async () => {
    await User.remove({});

    input = {
      name: 'foo',
      password: 'foo',
      email: 'foo@foo.com',
    };
  });

  afterEach(async () => {
    await User.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('has a module', () => {
    expect(User).toBeDefined();
  });

  describe('get users', () => {
    beforeEach(async () => {
      await User.insertMany(input, input);
    });

    it('should get users', async () => {
      const users = await User.find({}).lean();

      expect(removeMongoKeys(users)).toContainEqual(input);
    });
  });
});
