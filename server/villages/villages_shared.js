const User = require('../users/users_model');
const {
  updateCurrentUser,
  removeUserVillage,
} = require('../users/users_service')(User);

const addNewVillageToUser = (userId, villageId) =>
  new Promise((resolve, reject) => {
    updateCurrentUser(userId, { villages: villageId })
      .then(resolve)
      .catch(reject);
  });

const removeVillageToUser = (userId, villageId) =>
  new Promise((resolve, reject) => {
    removeUserVillage(userId, villageId)
      .then(resolve)
      .catch(reject);
  });

module.exports = {
  addNewVillageToUser,
  removeVillageToUser,
};
