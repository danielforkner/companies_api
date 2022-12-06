import React, { useState, useEffect } from 'react';
import Companies from './components/Companies';
import Industries from './components/Industries';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [selectedData, setSelectedData] = useState('companies');

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? <Loading /> : null}
        <p>Select Data:</p>
        <button onClick={() => setSelectedData('companies')}>Companies</button>
        <button onClick={() => setSelectedData('industries')}>Indstries</button>
      </header>
      {selectedData === 'companies' ? (
        <Companies
          setIsLoading={setIsLoading}
          companies={companies}
          setCompanies={setCompanies}
        />
      ) : (
        <Industries
          companies={companies}
          setCompanies={setCompanies}
          setIsLoading={setIsLoading}
          industries={industries}
          setIndustries={setIndustries}
        />
      )}
    </div>
  );
}
export default App;
