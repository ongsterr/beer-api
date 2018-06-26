const crypto = require('crypto');

function authenticateUser(email, password) {
  const hash = hashPassword(password);
  const user = {
    email: 'user@example.com',
    password: 'foobar',
    hash: 'f035136d2c07645b530eeda1c7b400697eb322fb2fe8e7cb7a4fea1ea67642e9eb7e157a330dc3053dbfacf711fa467c7421bff6721f60ce118f18f63283753c'
  }
  if (email === user.email && password === user.password) {
    return true;
  }
  return false;
}

function hashPassword(password) {
  const modifiedPassword = password == undefined ? '' : password;
  const salt = 'abc' // crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(modifiedPassword, salt, 10000, 64, 'sha512').toString('hex');
  return hash;
}

module.exports = {
  authenticateUser,
}