const express = require("express");

require("dotenv").config();

const User = require("../models/usersModels");

const Autenticate = require("../middlewares/authenticate");

const router = express.Router();

const { register, login } = require("../controllers/authControl");

router.get(`${process.env.USERDATA}`, async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    console.log("=>> showing all user data");
    res.status(202).send(user);
  } catch (error) {
    console.log("=>> Registration ERROR", error);
    res.status(502).send({ error: true, token: "" });
  }
});

router.get("/user", Autenticate, async (req, res) => {
  try {
    const user = req.user;

    console.log(`==> getting user data for ${user.name}`);
    res.status(201).send({ error: false, token: user });
  } catch (error) {
    console.log("==> getting user Error", error);
    res.status(500).send({ error: true, token: "Server error" });
  }
});

router.post("/register", register);

router.post("/login", login);

module.exports = router;
