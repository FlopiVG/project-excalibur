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

module.exports = Village => ({
  getVillageFromId: id => getVillageFromId(Village, id),
});
