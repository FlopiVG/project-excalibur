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

export function upgradeBuild(id) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'POST',
      url: `/api/build/${id}`,
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}
