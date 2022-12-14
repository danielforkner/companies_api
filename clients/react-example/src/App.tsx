import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Companies from './components/Companies';
import Industries from './components/Industries';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Array<Object>>([]);
  const [industries, setIndustries] = useState<Array<Object>>([]);
  const [marketCaps, setMarketCaps] = useState<{ [key: string]: any }>({});
  const [selectedData, setSelectedData] = useState('companies');

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? <Loading /> : null}
        <p>Select Data:</p>
        <Link to="/react-example/companies">Companies</Link>
        <Link to="/react-example/industries">Industries</Link>
      </header>
      <Routes>
        <Route
          path="/react-example"
          element={
            <Companies
              setIsLoading={setIsLoading}
              companies={companies}
              setCompanies={setCompanies}
            />
          }
        />

        <Route
          path="/react-example/industries"
          element={
            <Industries
              companies={companies}
              setCompanies={setCompanies}
              setIsLoading={setIsLoading}
              industries={industries}
              setIndustries={setIndustries}
              marketCaps={marketCaps}
              setMarketCaps={setMarketCaps}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
