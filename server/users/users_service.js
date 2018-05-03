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

module.exports = model => ({
  getAllModelUsers: () => getAllModelUsers(model),
  createNewUser: data => createNewUser(model, data),
});
