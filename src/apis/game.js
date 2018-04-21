import Axios from 'axios';
import { resources } from './gameData';

require('isomorphic-unfetch');

const { DELAY = 0 } = process.env;

export function userBuilds(host) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: '/api/builds',
      baseURL: host,
    })
      .then(res => resolve(res.data))
      .catch(error => reject(new Error(error)));
  });
}

export function getUserResources() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resources);
    }, DELAY);
  });
}

export function updateBuild(id) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      url: '/api/resources',
      data: {
        id,
      },
    })
      .then(() => resolve('Ok'))
      .catch(err => reject(err));
  });
}
