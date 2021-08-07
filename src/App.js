import React, { useState } from 'react';
import './App.css';
import Header from './Header';

const api = '';

function App() {
  const [country, setCountry] = useState('');
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');
  const [currency, setCurrency] = useState('');
  const [language, setLanguage] = useState('');
  const [flag, setFlag] = useState('');

  const getCountryInfo = (country) => {
    // api call
  }

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <input type="text" value="country" onChange={(e) => setCountry(e.target.value)}/>
        <button onClick={}>Submit</button>
      </div>
      <div className="body">
        <section>
          <h2 className="country">Country: {country}</h2>
          <h2 className="capital">Capital: {capital}</h2>
          <h2 className="population">Population: {population}</h2>
          <h2 className="currency">Currency: {currency}</h2>
          <h2 className="language">Language: {language}</h2>

          {/* for the flag */}
          <img src="" alt="" />
        </section>
      </div>
    </>
  );
}

export default App;
