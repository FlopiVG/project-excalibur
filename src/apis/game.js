import Axios from 'axios';

require('isomorphic-unfetch');

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
  return new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: '/api/resources',
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

export function updateBuild(id) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      url: '/api/build',
      data: {
        id,
      },
    })
      .then(() => resolve('Ok'))
      .catch(err => reject(err));
  });
}
