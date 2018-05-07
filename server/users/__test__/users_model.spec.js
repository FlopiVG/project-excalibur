const mongoose = require('mongoose');

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
  });

  describe('create user', () => {
    it('should send the correct error if email is invalid', () => {
      const expected = {
        username: 'bar',
        email: 'bar',
        password: 'bar',
      };

      return new User(expected).save().catch((error) => {
        expect(error.errors.email.message).toEqual('bar is not a valid email.');
      });
    });

    it('should send required error if dont type username, email and password fields', () =>
      new User({}).save().catch(({ errors }) => {
        expect(errors.email.message).toEqual('Path `email` is required.');
        expect(errors.password.message).toEqual('Path `password` is required.');
        expect(errors.username.message).toEqual('Path `username` is required.');
      }));

    it('should send unique error if there are two users with the same username', () => {
      const user1 = {
        username: 'bar',
        email: 'bar@bar.com',
        password: 'bar',
      };
      const user2 = {
        username: 'bar',
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
        username: 'bar',
        email: 'bar@bar.com',
        password: 'bar',
      };
      const user2 = {
        username: 'foo',
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
