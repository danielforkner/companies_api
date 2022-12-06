require('dotenv').config();
const express = require('express');
const app = express();
const apiRouter = require('./api');
const PORT = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  res.send(err);
});

// static
app.use(express.static('public'));
app.use(express.static('react-example'));
app.use('/react-example', (_, res) =>
  res.sendFile(path.join(__dirname, 'react-example/client', 'index.html'))
);
app.use('/', (_, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

// db
const { client } = require('./db');

// server
app.listen(PORT, async () => {
  console.log('listening...' + ' on port:', +PORT);
  try {
    await client.connect();
    console.log('Database is connected');
  } catch (error) {
    console.error('Database connection error\n', error);
  }
});
