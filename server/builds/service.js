const Builds = require('./model');

let builds = Builds;

function calculeTotalCost(build, { cost, level }) {
  return {
    ...build,
    foodCost: Math.floor(cost.food.quantity * (cost.food.multi * level)),
    woodCost: Math.floor(cost.wood.quantity * (cost.wood.multi * level)),
  };
}

function getBuildsFromModel() {
  return new Promise((resolve) => {
    resolve(builds.map(calculeTotalCost));
  });
}

function updateLevelFromModel(id) {
  return new Promise((resolve, reject) => {
    if (!builds.find(build => build.id === id)) {
      reject(new Error(`Dont find any build with id ${id}`));
    }
    builds = builds.map((build) => {
      if (build.id !== id) return build;
      return {
        ...build,
        level: build.level + 1,
      };
    });
    resolve(builds.map(calculeTotalCost).find(build => build.id === id));
  });
}

module.exports = {
  getBuildsFromModel,
  updateLevelFromModel,
};
