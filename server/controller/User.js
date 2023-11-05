const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function createUser(req, res) {
  let { name, email, password, userDiseases} = req.body;
  email = email.toLowerCase();
  const registeredEmail = await User.findOne({email: email});

  if(registeredEmail){
      res.status(400).json('email already exists');
  }

  else{
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      await User.create({name, email, password: hash});
      res.json('register');
  }
}

async function verifyUser(req, res) {
  let { email, password } = req.body;
  if(!email || !password) res.status(400).json('missing fields');
  else{
      email = email.toLowerCase();
      const user = await User.findOne({ email: email});
      if(user && bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ id: user._id }, `${process.env.SECRET}`, { expiresIn: '1h' });
          res.cookie('jwt', token, { signed: true,httpOnly: true ,maxAge: 1000 * 60 * 60 }).json('login');
      } 
      else {
          res.status(400).json('login failed');
      }
  }
}

async function getUserDetailsByemail(req, res) {
  const token = req.signedCookies.jwt;
  if(token){
      const decoded = jwt.verify(token, `${process.env.SECRET}`);
      const user = await User.findById(decoded.id);
      res.json(user);
  }
  else{
      res.status(400).json('no token');
  }
}

module.exports = {
  createUser,
  verifyUser,
  getUserDetailsByemail,
};
