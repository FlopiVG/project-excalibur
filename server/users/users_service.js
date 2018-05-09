const getAllModelUsers = User =>
  new Promise((resolve, reject) => {
    User.find({})
      .select('-password')
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

const deleteModelUser = (User, id) =>
  new Promise((resolve, reject) => {
    User.findById(id)
      .remove()
      .then(resolve)
      .catch(reject);
  });

const checkLogingUser = user =>
  new Promise((resolve) => {
    user.set('password', '');
    resolve(user);
  });

module.exports = model => ({
  getAllModelUsers: () => getAllModelUsers(model),
  deleteModelUser: id => deleteModelUser(model, id),
  createNewUser: data => createNewUser(model, data),
  checkLogingUser: user => checkLogingUser(user),
});
