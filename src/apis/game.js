import { builds } from './gameData';

export function userBuilds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(builds);
    }, 3000);
  });
}
