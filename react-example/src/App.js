import { getCompanies, getFinancialsById } from './api';
import React, { useState, useEffect } from 'react';

function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    const loadFinancials = async () => {
      let id = window.location.hash.slice(1);
      if (!id) return;
      setSelectedCompany(id);
      let financials = await getFinancialsById(id);
      setFinancials(financials);
    };
    const loadData = async () => {
      let companyList = await getCompanies();
      setCompanies(companyList);
    };

    window.addEventListener('hashchange', loadFinancials);
    loadFinancials();
    loadData();

    return () => {
      window.removeEventListener('hashchange');
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Companies-list">
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
}

export default App;
