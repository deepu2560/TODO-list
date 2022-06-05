const express = require("express");

const connect = require("./src/config/db");

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 8000, async () => {
  try {
    await connect();

    console.log("Server started");
  } catch (error) {
    console.log("ERROR", error);
  }
});
