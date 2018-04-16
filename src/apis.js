export function logginUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data.username) {
        reject('Invalid username.')
      }
      if (!data.password) {
        reject('Invalid password.')
      }
      resolve('Login succesfull.')
    }, 3000)
  })
}