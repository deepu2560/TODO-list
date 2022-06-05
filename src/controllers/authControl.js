require("dotenv").config();

const jwt = require("jsonwebtoken");

const User = require("../models/usersModels");

const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT__KEY}`);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username })
      .lean()
      .exec();

    if (user) return res.status(400).send({ error: true, token: "" });

    user = await User.create(req.body);

    const token = new Token(user);

    console.log(`${req.body.name} is registered. token: ${token}`);

    res.status(201).send({ error: false, token });
  } catch (error) {
    console.log("Registration ERROR", error);
    res.status(502).send({ error: true, token: "" });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username })
      .lean()
      .exec();

    if (!user) {
      return res.status(400).send({ error: true, token: "" });
    }

    let match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send({ error: true, token: "" });
    }

    const token = newToken(user);

    console.log(`${user.name} is logged in`);

    res.status().send({ error: false, token });
  } catch (error) {
    console.log("Registration ERROR", error);
    res.status(502).send({ error: true, token: "" });
  }
};

module.exports = { register, login };
