require('dotenv').config();
const axios = require('axios');
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

describe('Financials', () => {
  let financial;

  test('getAllFinancials', async () => {
    const response = await axios.get('http://localhost:3001/api/financials');
    financial = response.data[0];
    expect(response.data.length).toBe(95);
  });

  test('getFinancialsById', async () => {
    const response = await axios.get(
      `http://localhost:3001/api/financials/${financial.id}`
    );
    expect(response.data).toBeDefined();
  });
});

describe('Industries', () => {
  test('getAllIndustries', async () => {
    const response = await axios.get('http://localhost:3001/api/industries');
    expect(response.data.length).toBe(55);
  });
});

describe('Employees', () => {
  let employee;

  test('getAllEmployees', async () => {
    const response = await axios.get('http://localhost:3001/api/employees');
    expect(response.data.length).toBe(100);
  });

  test('getRandomEmployee', async () => {
    const response = await axios.get(
      'http://localhost:3001/api/employees/random'
    );
    employee = response.data;
    expect(employee).toBeDefined();
  });

  test('getEmployeesByCompanyId', async () => {
    const response = await axios.get(
      `http://localhost:3001/api/employees/21ImC8IUCp19m&QEfdBbg`
    );
    expect(response.data.length).toBe(100);
  });
});

describe('Users', () => {
  let username = 'test';
  let password = 'test';
  let id;

  test('register user the first time', async () => {
    const response = await axios.post(
      'http://localhost:3001/api/users/register',
      {
        username,
        password,
      }
    );
    id = response.data.id;
    expect(response.status).toBe(201);
  });

  test('register user the second time', async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/register',
        {
          username,
          password,
        }
      );
      expect(response.status).toBe(409);
    } catch (error) {
      expect(error.message).toBe('Request failed with status code 409');
    }
  });

  test('login user', async () => {
    const response = await axios.put('http://localhost:3001/api/users/login', {
      username,
      password,
    });
    let token = response.data.token;
    expect(response.status).toBe(200);
    expect(token).toBeDefined();
  });
});
