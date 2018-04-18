import { News } from './newsData';

export function getNews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(News);
    }, 3000);
  });
}
