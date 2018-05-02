import Axios from 'axios';

export function userBuilds() {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: '/api/builds',
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}

export function userBuild(id) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: `/api/build/${id}`,
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}

export function upgradeBuild(id) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'POST',
      url: `/api/build/${id}`,
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}
