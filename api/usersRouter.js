const usersRouter = require('express').Router();
const { Users } = require('../db/models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const bcrypt = require('bcrypt');
const saltRounds = 10;

usersRouter.post('/register', async (req, res, next) => {
  console.log('registering user');
  const { username, password } = req.body;
  try {
    // check for existing user
    const user = await Users.getUserByUsername(username);
    if (user) {
      res
        .status(409)
        .send({ error: 'Unauthorized', message: 'User already exists' });
    } else {
      // hash password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // create new user
      const newUser = await Users.create({
        username,
        password: hashedPassword,
      });
      const token = jwt.sign(
        { id: newUser.id, username: newUser.username },
        JWT_SECRET
      );
      res.status(201).send({ token });
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.put('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await Users.getUserByUsername(username);
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(401).send({
          error: 'Unauthorized',
          message: 'Incorrect Username or Password',
        });
      } else {
        let lastLogin = await Users.updateLoginTimestamp(user.id);
        if (!lastLogin)
          throw new Error({
            error: 'Database Error',
            message:
              'Unable to update login timestamp. Database error, please try again later.',
          });
        const token = jwt.sign(
          { id: user.id, username: user.username },
          JWT_SECRET
        );
        res.send({ token });
      }
    } else {
      res.status(401).send({
        error: 'Unauthorized',
        message: 'Incorrect Username or Password',
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
