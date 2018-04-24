import News from './newsData';

const { DELAY = 0 } = process.env;

export default function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(News);
    }, DELAY);
  });
}
