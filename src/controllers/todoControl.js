const express = require("express");

const Event = require("../models/todoModels");

const router = express.Router();

router.post("/event", async (req, res) => {
  try {
    let event = await Event.create(req.body);

    console.log(`=>> event is added for ${req.body.user_id}`);

    res.status().send({ error: false, event });
  } catch (error) {
    console.log("=>> Registration ERROR", error);
    res.status(502).send({ error: true, event: "" });
  }
});

module.exports = router;
