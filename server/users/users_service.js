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

const updateCurrentUser = (User, id, data) =>
  new Promise((resolve, reject) => {
    User.findById(id)
      .then((user) => {
        Object.keys(data).forEach((key) => {
          if (key === 'villages') user.villages.push(data[key]);
        });
        return user.save();
      })
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
  updateCurrentUser: (id, data) => updateCurrentUser(model, id, data),
  createNewUser: data => createNewUser(model, data),
  checkLogingUser: user => checkLogingUser(user),
});
