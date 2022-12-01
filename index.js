const { Companies } = require('./db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { client } = require('./db');

const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/companies/random', async (_, res) => {
  let company = await Companies.getRandomCompany();
  res.send(company);
});

app.get('/companies', async (_, res) => {
  let companies = await Companies.getAllCompanies();
  res.send(companies);
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Companies API</h1>');
});

app.listen(PORT, async () => {
  console.log('listening...' + ' on port:', +PORT);
  try {
    await client.connect();
    console.log('Database is connected');
  } catch (error) {
    console.error('Database connection error\n', error);
  }
});
