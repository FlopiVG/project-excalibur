const getVillageFromId = (Village, id) =>
  new Promise((resolve) => {
    resolve(`Village with id ${id}`);
  });

module.exports = Village => ({
  getVillageFromId: id => getVillageFromId(Village, id),
});
