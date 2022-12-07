import React from 'react';

interface CompanyFinancialProps {
  type: string;
  data: Array<object>;
}

const CompanyFinancials = ({ type, data }: CompanyFinancialProps) => {
  return (
    <div className="data">
      <h1>Data</h1>
      {type === 'company-financials' ? (
        <table>
          <tr>
            <th>Quarter</th>
            <th>Revenue</th>
            <th>COGS</th>
            <th>Margin</th>
            <th>Profit</th>
          </tr>
          {data.map(
            (
              report: {
                quarter: string;
                revenue: string;
                cogs: string;
                profit_margin: string;
              },
              idx: number
            ) => (
              <tr
                style={{
                  backgroundColor: idx % 2 === 0 ? 'lightgray' : 'white',
                }}
              >
                <td>{report.quarter}</td>
                <td>${parseFloat(report.revenue).toFixed(2)}mil</td>
                <td>${parseFloat(report.cogs).toFixed(2)}mil</td>
                <td>{parseFloat(report.profit_margin).toFixed(2)}%</td>
                <td>
                  $
                  {(
                    parseFloat(report.revenue) - parseFloat(report.cogs)
                  ).toFixed(2)}
                  mil
                </td>
              </tr>
            )
          )}
        </table>
      ) : null}
    </div>
  );
};

export default CompanyFinancials;
