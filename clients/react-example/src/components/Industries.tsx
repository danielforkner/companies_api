import React, { useState, useEffect } from 'react';
import { getCompanies, getIndustries } from '../api';

interface IndustriesProps {
  setIsLoading: Function;
  industries: Object[];
  setIndustries: Function;
  companies: Array<object>;
  setCompanies: Function;
  marketCaps: object;
  setMarketCaps: Function;
}

const Industries = ({
  setIsLoading,
  industries,
  setIndustries,
  companies,
  setCompanies,
  marketCaps,
  setMarketCaps,
}: IndustriesProps) => {
  const [isMarketCap, setIsMarketCap] = useState(false);
  const toggleMarketCap = () => setIsMarketCap(!isMarketCap);

  const getMarketCaps = () => {
    interface INewMarketCaps {
      [key: string]: number;
    }
    let newMarketCaps: INewMarketCaps = {};
    companies.forEach((company: { market_cap: string; industry: string }) => {
      let cap: string = company.market_cap;
      let type: string = cap[cap.length - 1];
      let parsedCap: number = parseFloat(cap.slice(1, cap.length - 1));
      if (type === 'M') {
        parsedCap /= 1000;
      }
      newMarketCaps[company.industry]
        ? (newMarketCaps[company.industry] += parsedCap)
        : (newMarketCaps[company.industry] = parsedCap);
    });
    setMarketCaps(newMarketCaps);
    console.log(newMarketCaps);
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

    if (!industries.length) {
      loadData();
      getMarketCaps();
    }
  }, []);

  return (
    <div>
      <div className="Industries-list">
        <h1>Industries</h1>
        {isMarketCap && (
          <table>
            <tr>
              <th>Industry</th>
              <th>Market Cap</th>
            </tr>
            {/* https://bobbyhadz.com/blog/typescript-object-get-key-by-value */}
            {(Object.keys(marketCaps) as (keyof typeof marketCaps)[]).map(
              (key) => {
                let value: number = marketCaps[key];
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{`$${String(value.toFixed(2))}B`}</td>
                  </tr>
                );
              }
            )}
          </table>
        )}
        <button onClick={toggleMarketCap}>Show Market Cap by Industry</button>
        {industries.map((industry: { id: string; industry: string }) => (
          <li>
            <a href={`#${industry.id}`}>{industry.industry}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Industries;
