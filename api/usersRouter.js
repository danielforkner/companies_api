const usersRouter = require('express').Router();
const { Users } = require('../db/models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

usersRouter.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // check for existing user
    const user = await Users.getUserByUsername(username);
    if (user) {
      res.status(401).send('User already exists');
    } else {
      const newUser = await Users.create({ username, password });
      const token = jwt.sign(
        { id: newUser.id, username: newUser.username },
        JWT_SECRET
      );
      res.send(token);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
