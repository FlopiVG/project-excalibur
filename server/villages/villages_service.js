const {
  addNewVillageToUser,
  removeVillageToUser,
} = require('./villages_shared');

const getVillageFromId = (Village, id) =>
  new Promise((resolve, reject) => {
    Village.findById(id)
      .populate({
        path: 'builds.info',
        select: '-_id -__v',
      })
      .populate({
        path: 'resources.info',
        select: '-_id -__v',
      })
      .then(resolve)
      .catch(reject);
  });

const createNewUserVillage = (Village, data, userId) =>
  new Promise((resolve, reject) => {
    new Village(data)
      .save()
      .then(async (village) => {
        await addNewVillageToUser(userId, village._id);
        return Promise.resolve(village);
      })
      .then(resolve)
      .catch(reject);
  });

const removeUserVillage = (Village, villageId, userId) =>
  new Promise((resolve, reject) => {
    removeVillageToUser(userId, villageId)
      .then(() => Village.findByIdAndRemove(villageId))
      .then(resolve)
      .catch(reject);
  });

module.exports = Village => ({
  getVillageFromId: id => getVillageFromId(Village, id),
  createNewUserVillage: (data, userId) =>
    createNewUserVillage(Village, data, userId),
  removeUserVillage: (villageId, userId) =>
    removeUserVillage(Village, villageId, userId),
});
