const UserCtl = {};
const UserModel = require('../models/Users');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');
const helpers = require('../libs/helpers');

UserCtl.signup = async (req, res) => {
  const { password } = req.body;
  const encriptPass = await helpers.encryptPassword(password);
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: encriptPass,
  };
  const newUser = new UserModel(user);

  const savedUser = await newUser.save();

  // create tokens
  const token = jwt.sign({ _id: savedUser.id }, secretKey, {
    expiresIn: 60 * 60 * 24,
  });
  res.header('auth-token', token).json({ savedUser });
};

UserCtl.signin = async (req, res) => {
  const user = await UserModel.findOne({ username: req.body.username });
  if (!user)
    return res.status(400).json({ message: 'User or password is wrong' });

  const { password } = req.body;
  const correctPass = await helpers.matchPassword(password, user.password);

  if (!correctPass)
    return res.status(400).json({ message: 'Invalid Password' });

  const token = jwt.sign({ _id: user.id }, secretKey, {
    expiresIn: 60 * 60 * 24,
  });

  res.header('auth-token', token).json({ user });
};

UserCtl.profile = async (req, res) => {
  const user = await UserModel.findById(req.userId);
  if (!user) return res.status(404).json({ message: 'user no found' });
  res.json({ user });
};

module.exports = UserCtl;
