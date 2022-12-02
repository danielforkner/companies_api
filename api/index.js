const { Companies } = require('../db');

const apiRouter = require('express').Router();

apiRouter.get('/companies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let company = await Companies.getCompanyById(id);
    if (!company) {
      res.send('No such company');
    } else {
      res.send(company);
    }
  } catch (error) {
    res.status(500);
    next(error);
  }
});

apiRouter.get('/companies/random', async (_, res) => {
  let company = await Companies.getRandomCompany();
  res.send(company);
});

apiRouter.get('/companies', async (_, res) => {
  let companies = await Companies.getAllCompanies();
  res.send(companies);
});

module.exports = apiRouter;
