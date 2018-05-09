const User = require('../users/users_model');
const { updateCurrentUser } = require('../users/users_service')(User);

const addNewVillageToUser = (id, villageId) =>
  new Promise((resolve, reject) => {
    updateCurrentUser(id, { villages: villageId })
      .then(resolve)
      .catch(reject);
  });

module.exports = {
  addNewVillageToUser,
};
