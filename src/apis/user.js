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
    }, 3000);
  });
}

export function logoutUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Logout succesfull');
    }, 3000);
  });
}

export function whoAmi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pepe');
    }, 3000);
  });
}
