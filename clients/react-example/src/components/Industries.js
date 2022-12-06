import React, { useState, useEffect } from 'react';
import { getCompanies, getIndustries } from '../api';

const Industries = ({
  setIsLoading,
  industries,
  setIndustries,
  companies,
  setCompanies,
}) => {
  const [marketCaps, setMarketCaps] = useState({});
  const [isMarketCap, setIsMarketCap] = useState(false);
  const toggleMarketCap = () => setIsMarketCap(!isMarketCap);

  const getMarketCaps = () => {
    let newMarketCaps = {};
    companies.forEach((company) => {
      let cap = company.market_cap;
      let type = cap[cap.length - 1];
      cap = parseFloat(cap.slice(1, cap.length - 1));
      if (type === 'M') {
        cap /= 1000;
      }
      console.log(cap);
      newMarketCaps[company.industry]
        ? (newMarketCaps[company.industry] += cap)
        : (newMarketCaps[company.industry] = cap);
    });
    console.log(newMarketCaps);
    setMarketCaps(newMarketCaps);
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let industryList = await getIndustries();
        setIndustries(industryList);
        if (!companies.length) {
          let companyList = await getCompanies();
          setCompanies(companyList);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    // window.addEventListener('hashchange', loadFinancials);
    // loadFinancials();
    if (!industries.length) {
      loadData();
      getMarketCaps();
    }

    return () => {
      //   window.removeEventListener('hashchange', loadFinancials);
    };
  }, []);

  return (
    <div>
      <div className="Industries-list">
        <h1>Industries</h1>
        {isMarketCap ? (
          <div>
            {Object.keys(marketCaps).map((industry) => {
              return (
                <p>{`${industry}: $${String(
                  marketCaps[industry].toFixed(2)
                )}B`}</p>
              );
            })}
          </div>
        ) : null}
        <button onClick={toggleMarketCap}>Show Market Cap by Industry</button>
        {industries.map((industry) => (
          <li>
            <a href={`#${industry.id}`}>{industry.industry}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Industries;
