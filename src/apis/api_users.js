import Axios from 'axios';

const { DELAY = 0 } = process.env;

export function logginUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data.username) {
        reject(new Error('Invalid username.'));
      }
      if (!data.password) {
        reject(new Error('Invalid password.'));
      }
      resolve(data.username);
    }, DELAY);
  });
}

export function logoutUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Logout succesfull');
    }, DELAY);
  });
}

export function whoAmi(baseURL) {
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
