const { checkFoundDoc } = require('../utils/validations');

const getAllModelUsers = User =>
  new Promise((resolve, reject) => {
    User.find({})
      .lean()
      .then(resolve)
      .catch(reject);
  });

const createNewUser = (User, data) =>
  new Promise((resolve, reject) => {
    new User(data)
      .save()
      .then(resolve)
      .catch(reject);
  });

const checkLoginRequest = body =>
  new Promise((resolve, reject) => {
    if (!body.name || !body.password) reject(new Error('Bad request.'));
    resolve(body);
  });

const checkLogingUser = (User, data) =>
  new Promise((resolve, reject) => {
    checkLoginRequest(data)
      .then(user => User.findOne({ name: user.name }))
      .then(user =>
        checkFoundDoc(user, `Dont find user with name ${data.name}`))
      .then(user => user.comparePassword(data.password))
      .then(isValid =>
        (isValid
          ? Promise.resolve('Login succesfull.')
          : Promise.reject(new Error('Password invalid.'))))
      .then(resolve)
      .catch(reject);
  });

module.exports = model => ({
  getAllModelUsers: () => getAllModelUsers(model),
  createNewUser: data => createNewUser(model, data),
  checkLogingUser: data => checkLogingUser(model, data),
});
