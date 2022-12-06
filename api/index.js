const { Companies, Financials, Industries } = require('../db');

const apiRouter = require('express').Router();

apiRouter.get('/financials/:id', async (req, res) => {
  const { id } = req.params;
  let financials = await Financials.getFinancialsById(id);
  res.send(financials);
});

apiRouter.get('/financials', async (_, res) => {
  try {
    let financials = await Financials.getAllFinancials();
    res.send(financials);
  } catch (error) {
    throw new Error(error);
  }
});

apiRouter.get('/industries', async (_, res) => {
  try {
    let industries = await Industries.getIndustries();
    res.send(industries);
  } catch (error) {
    throw new Error(error);
  }
});

apiRouter.get('/companies/allIds', async (_, res) => {
  let ids = await Companies.getAllCompanyIds();
  res.send(ids);
});

apiRouter.get('/companies/random', async (_, res) => {
  let company = await Companies.getRandomCompany();
  res.send(company);
});

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

apiRouter.get('/companies', async (_, res) => {
  let companies = await Companies.getAllCompanies();
  res.send(companies);
});

module.exports = apiRouter;
