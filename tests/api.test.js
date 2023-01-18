require('dotenv').config();
const axios = require('axios');

describe('Companies', () => {
  let company;

  test('getAllCompanies', async () => {
    const response = await axios.get('http://localhost:3001/api/companies');
    expect(response.data.length).toBe(95);
  });

  test('getRandomCompany', async () => {
    const response = await axios.get(
      'http://localhost:3001/api/companies/random'
    );
    company = response.data;
    expect(company).toBeDefined();
  });

  test('getCompanyById', async () => {
    const response = await axios.get(
      `http://localhost:3001/api/companies/${company.id}`
    );
    expect(response.data).toBeDefined();
  });

  test('getAllCompanyIds', async () => {
    const response = await axios.get(
      'http://localhost:3001/api/companies/allIds'
    );
    expect(response.data.length).toBe(95);
  });
});
