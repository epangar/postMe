const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


const logInPromise = (user, req) => new Promise((resolve, reject) => {
  req.login(user, (err) => {
    if (err) return reject('Something went wrong');
    resolve(user);
  });
});


/* GET home page */
router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;

  console.log(req.body)

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username })
    .then(user => {
      if (user) throw new Error('The username already exists');

      console.log("Usuario no existía previamente")

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      console.log("Contraseña encriptada")

      const theUser = new User({
        username,
        password: hashPass
      });

      console.log(theUser)
      return theUser.save().then(user => logInPromise(user, req));
    })
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({ message: e.message }));
});

router.post('/login', (req, res, next) => {

  const { username, password } = req.body;
  console.log(req.body)

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }
  User.findOne({ username })
    .then(user => {
      if (!user) throw new Error('The username does not exist');
      if (!bcrypt.compareSync(password, user.password)) throw new Error('The password is not correct');
      return logInPromise(user, req);
    })
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({ message: e.message }));

});

router.get('/loggedin', (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  } else {
    return res.status(400).json({ message: "You should loggin first" });
  }
});

router.get('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    return res.status(200).json({ message: "User logged out" });
  } else {
    return res.status(400).json({ message: "You should loggin first" });
  }
});



module.exports = router;