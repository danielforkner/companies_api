const { Companies } = require('../db');

const apiRouter = require('express').Router();

apiRouter.get('/companies/random', async (_, res) => {
  let company = await Companies.getRandomCompany();
  res.send(company);
});

apiRouter.get('/companies', async (_, res) => {
  let companies = await Companies.getAllCompanies();
  res.send(companies);
});

module.exports = apiRouter;
