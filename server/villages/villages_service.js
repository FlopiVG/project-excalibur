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

const createNewUserVillage = (Village, data /* userId */) =>
  new Promise((resolve, reject) => {
    new Village(data)
      .save()
      .then(resolve)
      .catch(reject);
  });

module.exports = Village => ({
  getVillageFromId: id => getVillageFromId(Village, id),
  createNewUserVillage: (data, userId) =>
    createNewUserVillage(Village, data, userId),
});
