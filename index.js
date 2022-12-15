require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

// middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// body parsing
app.use(express.json());
app.use((req, _, next) => {
  console.log('~~~BODY LOGGER START~~~');
  console.log('body: ', req.body);
  console.log('~~~BODY LOGGER END~~~');
  next();
});

const apiRouter = require('./api');
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  res.send(err);
});

// static
app.use(express.static('public'));
app.use('/', (_, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

// error handling
app.use((err, req, res, next) => {
  console.error('an error occurred: ', err);
  res.status(500).send(err);
});

// server
app.listen(PORT, async () => {
  console.log('listening...' + ' on port:', +PORT);
});
