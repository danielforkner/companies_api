const express = require('express');
const app = express();
const apiRouter = require('./api');
const PORT = process.env.PORT || 3000;

const morgan = require('morgan');

app.use(morgan('dev'));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Companies API</h1>');
});

const { client } = require('./db');

app.listen(PORT, async () => {
  console.log('listening...' + ' on port:', +PORT);
  try {
    await client.connect();
    console.log('Database is connected');
  } catch (error) {
    console.error('Database connection error\n', error);
  }
});
