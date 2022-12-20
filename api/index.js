const { Companies, Financials, Industries, Employees } = require('../db');

const apiRouter = require('express').Router();
console.log('apiRouter loaded');
apiRouter.use('/users', require('./usersRouter'));

apiRouter.get('/employees', async (_, res, next) => {
  try {
    let employees = await Employees.getAllEmployees();
    res.send(employees);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/employees/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let employees = await Employees.getEmployeesByCompanyId(id);
    res.send(employees);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/financials/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let financials = await Financials.getFinancialsById(id);
    res.send(financials);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/financials', async (_, res, next) => {
  try {
    let financials = await Financials.getAllFinancials();
    res.send(financials);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/industries', async (_, res, next) => {
  try {
    let industries = await Industries.getIndustries();
    res.send(industries);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/companies/allIds', async (_, res, next) => {
  try {
    let ids = await Companies.getAllCompanyIds();
    res.send(ids);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/companies/random', async (_, res, next) => {
  try {
    let company = await Companies.getRandomCompany();
    res.send(company);
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/companies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let company = await Companies.getCompanyById(id);
    if (!company) {
      res.status(404).send({ error: 'Not Found', message: 'No such company' });
    } else {
      res.send(company);
    }
  } catch (error) {
    res.status(500);
    next(error);
  }
});

apiRouter.get('/companies', async (_, res, next) => {
  try {
    let companies = await Companies.getAllCompanies();
    res.send(companies);
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
