const express = require("express");

const connect = require("./src/config/db");

const cors = require("cors");

const TodoController = require("./src/controllers/todoControl");

const UserController = require("./src/controllers/userControl");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/auth", UserController);

app.use("/todo", TodoController);

app.listen(process.env.PORT || 8000, async () => {
  try {
    await connect();

    console.log(`Server started and port ${process.env.PORT || 8000}`);
  } catch (error) {
    console.log("ERROR", error);
  }
});
