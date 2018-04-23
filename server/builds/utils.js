function checkFoundResource(doc) {
  return new Promise((resolve, reject) => {
    if (doc) resolve(doc);
    else reject(new Error('Dont found resource'));
  });
}

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
        name: cost.name,
        quantity: Math.floor(cost.quantity * (build.level * cost.multi)),
      }));
      resolve(buildMapped);
    }
  });
}

module.exports = {
  checkFoundResource,
  mapUpgradeCost,
};
