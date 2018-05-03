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

  describe('create user', () => {
    it('should create user succesfull', async () =>
      new User(input).save().then((data) => {
        expect(data.name).toEqual(input.name);
        expect(data.email).toEqual(input.email);
      }));

    it('should send the correct error if email is invalid', () => {
      const expected = {
        name: 'bar',
        email: 'bar',
        password: 'bar',
      };

      return new User(expected).save().catch((error) => {
        expect(error.errors.email.message).toEqual('bar is not a valid email.');
      });
    });

    it('should send required error if dont type name, email and password fields', () =>
      new User({}).save().catch(({ errors }) => {
        expect(errors.email.message).toEqual('Path `email` is required.');
        expect(errors.password.message).toEqual('Path `password` is required.');
        expect(errors.name.message).toEqual('Path `name` is required.');
      }));

    it('should send unique error if there are two users with the same name', () => {
      const user1 = {
        name: 'bar',
        email: 'bar@bar.com',
        password: 'bar',
      };
      const user2 = {
        name: 'bar',
        email: 'foo@foo.com',
        password: 'bar',
      };

      return (
        new User(user1)
          .save()
          .then(() => new User(user2).save())
          // Error code from duplicate key
          .catch(error => expect(error.code).toEqual(11000))
      );
    });

    it('should send unique error if there are two users with the same email', () => {
      const user1 = {
        name: 'bar',
        email: 'bar@bar.com',
        password: 'bar',
      };
      const user2 = {
        name: 'foo',
        email: 'bar@bar.com',
        password: 'bar',
      };

      return (
        new User(user1)
          .save()
          .then(() => new User(user2).save())
          // Error code from duplicate key
          .catch(error => expect(error.code).toEqual(11000))
      );
    });
  });
});
