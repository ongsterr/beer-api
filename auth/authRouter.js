const express = require('express');
const router = express.Router();
const auth  = require('./util');

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(auth.authenticateUser(email, password))

  if (auth.authenticateUser(email, password)) {
    const token = {
      token: '007'
    }
    res.status(200).json({
      token
    })
  } else {
    res.status(500).json({
      message: 'bad token'
    })
  }
})

module.exports = router;