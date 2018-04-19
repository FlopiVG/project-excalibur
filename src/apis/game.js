import { builds, resources } from './gameData';

const { DELAY = 0 } = process.env;

export function userBuilds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(builds);
    }, DELAY);
  });
}

export function getUserResources() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resources);
    }, DELAY);
  });
}

export function startCounterResource() {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve('Ok');
    }, DELAY);
  });
}
