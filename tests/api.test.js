require('dotenv').config();
const { Client } = require('pg');
const { Companies } = require('../db');

// write unit tests in jest
// https://jestjs.io/docs/en/getting-started

test('Companies', async () => {
  await client.connect();
  let companies = await Companies.getAllCompanies();
  console.log(companies);
  expect(companies.length).toBe(25);
  await client.end();
});
