import Builds from './gameData';

export default function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Builds);
    }, 3000);
  });
}
