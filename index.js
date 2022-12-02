const express = require('express');
const app = express();
const apiRouter = require('./api');
const PORT = process.env.PORT || 3000;
const path = require('path');

const morgan = require('morgan');

app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  res.send(err);
});

// static
app.use((_, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

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
