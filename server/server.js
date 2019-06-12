const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./database/dbHelpers");
const mw = require("./middleware");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("<h1>I am a Server!</h1>");
});

server.post("/api/register", mw.hashPass, async (req, res) => {
  try {
    const data = await db.addUser(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error!" });
  }
});

server.post("/api/login", mw.authZ, async (req, res) => {
  try {
    res
      .status(202)
      .json({ message: "Logged in successfully!", token: req.token });
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error!" });
  }
});

server.get("/api/users", mw.protected, async (req, res) => {
  try {
    const data = await db.getUsers();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error!" });
  }
});

module.exports = server;
