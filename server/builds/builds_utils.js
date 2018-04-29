function mapUpgradeCost(build) {
  return new Promise((resolve, reject) => {
    if (build.length) {
      const buildsMapped = build.map(mapUpgradeCost);
      Promise.all(buildsMapped)
        .then(resolve)
        .catch(reject);
    } else {
      const buildMapped = build;
      buildMapped.upgradeCost = build.upgradeCost.map(cost => ({
        _id: cost._id,
        name: cost.name,
        quantity: Math.floor(cost.quantity * (build.level * cost.multi)),
      }));
      resolve(buildMapped);
    }
  });
}

module.exports = {
  mapUpgradeCost,
};
