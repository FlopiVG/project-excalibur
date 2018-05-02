import Axios from 'axios';

export function getUserResources() {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: '/api/resources',
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}

export function updateUserResources(data) {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'PUT',
      url: '/api/resources',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}
