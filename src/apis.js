export function logginUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data.username) {
        reject('Invalid username.')
      }
      if (!data.password) {
        reject('Invalid password.')
      }
      resolve(data.username)
    }, 3000)
  })
}

export function whoAmi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('')
    }, 3000)
  })
}