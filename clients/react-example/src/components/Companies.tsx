import React, { useEffect, useState } from 'react';
import { getCompanies, getFinancialsById } from '../api';
import CompanyFinancials from './CompanyFinancials';
import Company from './Company';

interface CompaniesProps {
  companies: Object[];
  setCompanies: Function;
  setIsLoading: Function;
}

const Companies = ({
  companies,
  setCompanies,
  setIsLoading,
}: CompaniesProps) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [financials, setFinancials] = useState<Array<object>>([]);

  useEffect(() => {
    const loadFinancials = async () => {
      let id = window.location.hash.slice(1);
      if (!id) return;
      setSelectedCompany(id);
      try {
        let newFinancials = await getFinancialsById(id);
        setFinancials(newFinancials);
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
      {financials.length ? (
        <CompanyFinancials type="company-financials" data={financials} />
      ) : null}
      <div className="Companies-list">
        <h1>Companies</h1>
        {companies.map((company: { id: string; company_name: string }) => (
          <li>
            <a href={`#${company.id}`}>{company.company_name}</a>
          </li>
        ))}
      </div>
      <div className="Financials-list"></div>
    </div>
  );
};

export default Companies;
