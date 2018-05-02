import Axios from 'axios';

export const getNews = () =>
  new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: '/api/news',
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });

export const getNew = id =>
  new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: `/api/news/${id}`,
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
