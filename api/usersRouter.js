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
      res.status(201).send(token);
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.put('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await Users.getUserByUsername(username);
    if (user && user.password === password) {
      let lastLogin = await Users.updateLoginTimestamp(user.id);
      if (!lastLogin)
        throw new Error(
          'Unable to update login timestamp. Database error, please try again later.'
        );
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET
      );
      res.send(token);
    } else {
      res.status(401).send('Incorrect username or password');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
