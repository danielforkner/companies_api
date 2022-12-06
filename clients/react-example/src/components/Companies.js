import React, { useState, useEffect } from 'react';
import { getCompanies, getFinancialsById } from '../api';

const Companies = ({ companies, setCompanies }) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    const loadFinancials = async () => {
      let id = window.location.hash.slice(1);
      if (!id) return;
      setSelectedCompany(id);
      try {
        let financials = await getFinancialsById(id);
        setFinancials(financials);
      } catch (error) {
        console.error(error);
      }
    };
    const loadData = async () => {
      try {
        let companyList = await getCompanies();
        setCompanies(companyList);
      } catch (error) {
        console.error(error);
      }
    };

    window.addEventListener('hashchange', loadFinancials);
    loadFinancials();
    if (!companies.length) {
      loadData();
    }

    return () => {
      window.removeEventListener('hashchange', loadFinancials);
    };
  }, []);

  return (
    <div>
      <div className="Companies-list">
        <h1>Companies</h1>
        {companies.map((company) => (
          <li>
            <a href={`#${company.id}`}>{company.company_name}</a>
          </li>
        ))}
      </div>
      <div className="Financials-list">
        <table>
          <tr>
            <th>Quarter</th>
            <th>Revenue</th>
            <th>COGS</th>
            <th>Margin</th>
            <th>Profit</th>
          </tr>
          {financials.map((report) => (
            <tr>
              <td>{report.quarter}</td>
              <td>${parseFloat(report.revenue).toFixed(2)}mil</td>
              <td>${parseFloat(report.cogs).toFixed(2)}mil</td>
              <td>{parseFloat(report.profit_margin).toFixed(2)}%</td>
              <td>${parseFloat(report.revenue - report.cogs).toFixed(2)}mil</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Companies;
