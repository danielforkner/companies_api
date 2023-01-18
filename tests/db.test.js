require('dotenv').config();
const { Companies, Financials, Employees, Industries } = require('../db');
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

describe('Industries', () => {
  test('getAllIndustries', async () => {
    let industries = await Industries.getIndustries();
    expect(industries.length).toBe(55);
  });
});

describe('Employees', () => {
  let employee;

  test('getAllEmployees', async () => {
    let employees = await Employees.getAllEmployees();
    expect(employees.length).toBe(100);
  });

  test('getRandomEmployee', async () => {
    employee = await Employees.getRandomEmployee();
    expect(employee).toBeDefined();
  });

  test('getEmployeesByCompanyId', async () => {
    let employees = await Employees.getEmployeesByCompanyId(
      '21ImC8IUCp19m&QEfdBbg'
    );
    expect(employees.length).toBe(100);
  });
});
