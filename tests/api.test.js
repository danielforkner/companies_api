const { client, Companies } = require('../db');

test('Companies', async () => {
  await client.connect();
  let companies = await Companies.getAllCompanies();
  console.log(companies);
  expect(companies.length).toBe(25);
  await client.end();
});
