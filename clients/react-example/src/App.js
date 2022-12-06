import React, { useState, useEffect } from 'react';
import Companies from './components/Companies';
import Industries from './components/Industries';

function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedData, setSelectedData] = useState('companies');

  return (
    <div className="App">
      <header className="App-header">
        <p>Select Data:</p>
        <button onClick={() => setSelectedData('companies')}>Companies</button>
        <button onClick={() => setSelectedData('industries')}>Indstries</button>
      </header>
      {selectedData === 'companies' ? (
        <Companies companies={companies} setCompanies={setCompanies} />
      ) : (
        <Industries />
      )}
    </div>
  );
}

export default App;
