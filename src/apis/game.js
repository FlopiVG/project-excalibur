import { builds, resources } from './gameData';

export function userBuilds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(builds);
    }, 3000);
  });
}

export function getUserResources() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resources);
    }, 3000);
  });
}

export function startCounterResource() {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve('Ok');
    }, 1000);
  });
}
