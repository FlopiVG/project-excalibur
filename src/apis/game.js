import { Builds, Resources } from './gameData';

export function userBuilds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Builds);
    }, 3000);
  });
}

export function getUserResources() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Resources);
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
