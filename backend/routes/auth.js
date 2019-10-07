const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');



const login = (req, user) => {
    return new Promise((resolve,reject) => {
      req.login(user, err => {
        //console.log(user)
  
        if(err) {
          reject(new Error('Something went wrong'))
        }else{
          resolve(user);
        }
      })
    })
  }  


/* GET home page */
router.post('/signup', (req, res, next) => {
    const {username, password} = req.body;
  
    if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
    }
  
    User.findOne({ username })
    .then( user => {
        if(user) throw new Error('The username already exists');
        
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        return new User({
          username,
          password: hashPass
        }).save();
    
        
    })
    .then( user => logInPromise(user,req))
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({message:e.message}));
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
      
      // Check for errors
      if (err) next(new Error('Something went wrong')); 
      if (!theUser) next(failureDetails)
  
      // Return user and logged in
      login(req, theUser).then(user => res.status(200).json(req.user));
  
    })(req, res, next);
  });


router.get('/loggedin', (req, res) => {
    if(req.user){
        return res.status(200).json(req.user);
    }else{
        return res.status(400).json({message:"You should loggin first"});
    }
});

router.get('/logout', (req, res) => {
    if(req.user){
        req.logout();
        return res.status(200).json({message:"User logged out"});
    }else{
        return res.status(400).json({message:"You should loggin first"});
    }
});



module.exports = router;