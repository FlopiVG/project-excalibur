import Axios from 'axios';
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
