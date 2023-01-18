require('dotenv').config();
const { Companies, Financials } = require('../db');
const { pool } = require('../db/client.js');
const { seed } = require('../db/seed.js');

beforeAll(async () => {
  await seed();
});

afterAll(async () => {
  await pool.end();
});

describe('Companies', () => {
  let company;

  test('getAllCompanies', async () => {
    let companies = await Companies.getAllCompanies();
    expect(companies.length).toBe(95);
  });

  test('getRandomCompany', async () => {
    company = await Companies.getRandomCompany();
    expect(company).toBeDefined();
  });

  test('getCompanyById', async () => {
    let companyById = await Companies.getCompanyById(company.id);
    expect(companyById).toBeDefined();
  });

  test('getAllCompanyIds', async () => {
    let companyIds = await Companies.getAllCompanyIds();
    expect(companyIds.length).toBe(95);
  });
});

describe('Financials', () => {
  let financial;

  test('getAllFinancials', async () => {
    let financials = await Financials.getAllFinancials();
    financial = financials[0];
    expect(financials.length).toBe(95);
  });

  test('getFinancialsById', async () => {
    financial = await Financials.getFinancialsById(financial.id);
    expect(financial).toBeDefined();
  });
});
