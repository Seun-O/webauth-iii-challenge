const bcrypt = require("bcryptjs");
const db = require("../database/dbHelpers");
const jwt = require("../config");

function hashPass(req, res, next) {
  const user = req.body;
  if (user.password.length < 8) {
    res
      .status(406)
      .json({ message: "Password length must be at least 8 characters long" });
  } else {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    user.username = user.username.toLowerCase();
    next();
  }
}

async function authZ(req, res, next) {
  try {
    const body = req.body;
    const user = await db.getUsers(body.username);
    if (!user) {
      res.status(404).json({ message: "Enter a valid username and password!" });
    }
    if (user && bcrypt.compareSync(body.password, user.password)) {
      const token = jwt.generateToken(user);
      req.token = token;
      next();
    } else {
      res.status(404).json({ message: "Invalid username or password!" });
    }
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error!" });
  }
}

function protected(req, res, next) {
  const token = jwt.verifyToken(req.body.token);
  console.log(token);
  if (token) {
    next();
  } else {
    res.status(403).json({ message: "You are not Authorized!" });
  }
}

module.exports = {
  hashPass,
  authZ,
  protected
};
