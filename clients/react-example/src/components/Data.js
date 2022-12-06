import React from 'react';

const Data = ({ data }) => {
  return (
    <div className="data">
      <h1>Data</h1>
      {data.type === 'company-financials' ? (
        <table>
          <tr>
            <th>Quarter</th>
            <th>Revenue</th>
            <th>COGS</th>
            <th>Margin</th>
            <th>Profit</th>
          </tr>
          {data.data.map((report, idx) => (
            <tr
              style={{ backgroundColor: idx % 2 === 0 ? 'lightgray' : 'white' }}
            >
              <td>{report.quarter}</td>
              <td>${parseFloat(report.revenue).toFixed(2)}mil</td>
              <td>${parseFloat(report.cogs).toFixed(2)}mil</td>
              <td>{parseFloat(report.profit_margin).toFixed(2)}%</td>
              <td>${parseFloat(report.revenue - report.cogs).toFixed(2)}mil</td>
            </tr>
          ))}
        </table>
      ) : null}
    </div>
  );
};

export default Data;
