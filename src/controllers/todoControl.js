const express = require("express");

const Event = require("../models/todoModels");

const Authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/event", Authenticate, async (req, res) => {
  try {
    let event = await Event.create(req.body);

    console.log(`=>> event is added for ${req.body.user_id}`);

    res.status(200).send({ error: false, event });
  } catch (error) {
    console.log("=>> Progress ERROR", error);
    res.status(502).send({ error: true, event: "" });
  }
});

router.get("/pending/:id", Authenticate, async (req, res) => {
  try {
    let event = await Event.find({
      user_id: req.params.id,
      progess: "pending",
    })
      .lean()
      .exec();

    console.log(`=>> Showing pending progress for ${req.params.id}`);
    res.status(200).send({ error: false, event });
  } catch (error) {
    console.log("=>> Progress ERROR", error);
    res.status(502).send({ error: true, event: "" });
  }
});

router.get("/doing/:id", Authenticate, async (req, res) => {
  try {
    let event = await Event.find({
      user_id: req.params.id,
      progess: "doing",
    })
      .lean()
      .exec();

    console.log(`=>> Showing doing progress for ${req.params.id}`);
    res.status(200).send({ error: false, event });
  } catch (error) {
    console.log("=>> Progress ERROR", error);
    res.status(502).send({ error: true, event: "" });
  }
});

router.get("/done/:id", Authenticate, async (req, res) => {
  try {
    let event = await Event.find({
      user_id: req.params.id,
      progess: "done",
    })
      .lean()
      .exec();

    console.log(`=>> Showing done progress for ${req.params.id}`);
    res.status(200).send({ error: false, event });
  } catch (error) {
    console.log("=>> Progress ERROR", error);
    res.status(502).send({ error: true, event: "" });
  }
});

router.put("/:id", Authenticate, async (req, res) => {
  try {
    let event = await Event.findOneAndUpdate({ user_id: req.params.id })
      .lean()
      .exec();

    console.log(`=>> Progress updated for ${req.params.id}`);
    res.status(200).send({ error: false, event });
  } catch (error) {
    console.log("==> Progress ERROR", error);
    res.status(502).send({ error: true, event: "" });
  }
});

module.exports = router;
