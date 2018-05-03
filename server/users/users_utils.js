/**
 * Model utils
 */
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

function generatePassword(next) {
  if (!this.isModified('password')) return next();

  return bcrypt
    .genSalt(SALT_WORK_FACTOR)
    .then(salt => bcrypt.hash(this.password, salt))
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch(next);
}

function comparePassword(candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(candidatePassword, this.password)
      .then(resolve)
      .catch(reject);
  });
}

module.exports = {
  generatePassword,
  comparePassword,
};
