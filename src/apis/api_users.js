import Axios from 'axios';

const { DELAY = 0 } = process.env;

export function logginUser(data) {
  return new Promise((resolve, reject) => {
    if (!data.username) {
      return reject(new Error('Invalid username.'));
    }
    if (!data.password) {
      return reject(new Error('Invalid password.'));
    }
    return Axios({
      method: 'POST',
      url: '/api/login',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}

export function logoutUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Logout succesfull');
    }, DELAY);
  });
}

export function whoAmi(baseURL = '') {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'GET',
      url: '/api/whoami',
      baseURL,
    })
      .then(res => resolve(res.data))
      .catch(reject);
  });
}
