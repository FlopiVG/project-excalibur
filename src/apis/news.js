import News from './newsData';

export default function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(News);
    }, 3000);
  });
}
