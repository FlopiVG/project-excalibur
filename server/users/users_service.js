const getAllModelUsers = User =>
  new Promise((resolve, reject) => {
    User.find({})
      .lean()
      .then(resolve)
      .catch(reject);
  });

module.exports = model => ({
  getAllModelUsers: () => getAllModelUsers(model),
});
