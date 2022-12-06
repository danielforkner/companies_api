import React, { useState, useEffect } from 'react';
import { getIndustries } from '../api';

const Industries = () => {
  const [Industries, setIndustries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let industryList = await getIndustries();
      setIndustries(industryList);
    };

    // window.addEventListener('hashchange', loadFinancials);
    // loadFinancials();
    loadData();

    return () => {
      //   window.removeEventListener('hashchange');
    };
  }, []);

  return (
    <div>
      <div className="Industries-list">
        <h1>Industries</h1>
        {Industries.map((industry) => (
          <li>
            <a href={`#${industry.id}`}>{industry.industry}</a>
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
          {/* {financials.map((report) => (
            <tr>
              <td>{report.quarter}</td>
              <td>${parseFloat(report.revenue).toFixed(2)}mil</td>
              <td>${parseFloat(report.cogs).toFixed(2)}mil</td>
              <td>{parseFloat(report.profit_margin).toFixed(2)}%</td>
              <td>${parseFloat(report.revenue - report.cogs).toFixed(2)}mil</td>
            </tr>
          ))} */}
        </table>
      </div>
    </div>
  );
};

export default Industries;
